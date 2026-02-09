from pydantic import BaseModel
import psycopg2

# -------------------------
# DB CONNECTION
# -------------------------
conn = psycopg2.connect(
    host="localhost",
    database="chatboat",
    user="postgres",
    password="121"
)


# -------------------------
# SCHEMAS (Swagger payload fix)
# -------------------------
class RegisterSchema(BaseModel):
    fname: str
    lname: str
    mobile: str
    email: str
    chooiseUsername: str
    password: str

class LoginSchema(BaseModel):
    identifier: str   # if coming  email / mobile / chooiseUsername
    password: str

class ProfileUpdateSchema(BaseModel):
    user_id: int
    fname: str
    lname: str
    mobile: str

# -------------------------
# API FUNCTIONS
# -------------------------
def user_register(data: RegisterSchema):
    cur = conn.cursor()

    query = """
    INSERT INTO account_register
    (fname, lname, mobile, email, chooise_username, password_hash)
    VALUES (%s, %s, %s, %s, %s, %s)
    """

    cur.execute(query, (
        data.fname,
        data.lname,
        data.mobile,
        data.email,
        data.chooiseUsername,
        data.password
    ))

    conn.commit()
    cur.close()

    return {"message": "User registered successfully"}



def user_login(data: LoginSchema):
    cur = conn.cursor()

    query = """
    SELECT id, fname, lname, email, mobile, chooise_username
    FROM account_register
    WHERE
        (
            email = %s
            OR mobile = %s
            OR chooise_username = %s
        )
        AND password_hash = %s
    """

    cur.execute(query, (
        data.identifier,
        data.identifier,
        data.identifier,
        data.password
    ))

    user = cur.fetchone()
    cur.close()

    if user:
        return {
            "status": "success",
            "message": "User is successfully logged in",
            "user": {
                "user_id": user[0],
                "fname": user[1],
                "lname": user[2],
                "email": user[3],
                "mobile": user[4],
                "chooiseUsername": user[5],
            }
        }
    else:
        return {
            "status": "failed",
            "message": "Invalid username / email / mobile or password"
        }



def profile_update(data: ProfileUpdateSchema):
    cur = conn.cursor()

    query = """
    UPDATE account_register
    SET fname=%s, lname=%s, mobile=%s
    WHERE id=%s
    """

    cur.execute(query, (
        data.fname,
        data.lname,
        data.mobile,
        data.user_id
    ))

    conn.commit()
    cur.close()

    return {"message": "Profile updated successfully"}
