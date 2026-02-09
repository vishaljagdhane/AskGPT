from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api import (
    user_register,
    user_login,
    profile_update,
    RegisterSchema,
    LoginSchema,
    ProfileUpdateSchema
)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/user_register")
def register(data: RegisterSchema):
    return user_register(data)

@app.post("/user_login")
def login(data: LoginSchema):
    return user_login(data)

@app.put("/profile_update")
def update_profile(data: ProfileUpdateSchema):
    return profile_update(data)
