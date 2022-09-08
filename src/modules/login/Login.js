import React, { Component, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import './login.css'

function Login() {
    let loginBox = React.createRef()
    const signUPChange = () => {
        loginBox.current.className += ' right-panel-active'
    }
    const signInChange = () => {
        loginBox.current.className = loginBox.current.className.replace('right-panel-active', '')
    }

    return (
        <div className="container" id="login-box" ref={loginBox}>
            <div className="form-container sign-up-container">
                <form>
                    <h1>注册</h1>
                    <div className="txtb">
                        <input
                            type="text"
                            onFocus={(e) => {
                                if (!e.target.className.includes('focus'))
                                    e.target.className += 'focus'
                            }}
                            onBlur={(e) => {
                                if (e.target.value == '') {
                                    e.target.className = e.target.className.replace('focus', '')
                                }
                            }}
                        />
                        <span data-placeholder="Useranme"></span>
                    </div>
                    <div className="txtb">
                        <input
                            type="email"
                            onFocus={(e) => {
                                if (!e.target.className.includes('focus'))
                                    e.target.className += 'focus'
                            }}
                            onBlur={(e) => {
                                if (e.target.value == '') {
                                    e.target.className = e.target.className.replace('focus', '')
                                }
                            }}
                        />
                        <span data-placeholder="Email"></span>
                    </div>
                    <div className="txtb">
                        <input
                            type="password"
                            onFocus={(e) => {
                                if (!e.target.className.includes('focus'))
                                    e.target.className += 'focus'
                            }}
                            onBlur={(e) => {
                                if (e.target.value == '') {
                                    e.target.className = e.target.className.replace('focus', '')
                                }
                            }}
                        />
                        <span data-placeholder="Password"></span>
                    </div>
                    <div className="txtb">
                        <input
                            type="password"
                            onFocus={(e) => {
                                if (!e.target.className.includes('focus'))
                                    e.target.className += 'focus'
                            }}
                            onBlur={(e) => {
                                if (e.target.value == '') {
                                    e.target.className = e.target.className.replace('focus', '')
                                }
                            }}
                        />
                        <span data-placeholder="Confirm Password"></span>
                    </div>
                    <button>注册</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>登录</h1>
                    <div className="txtb">
                        <input
                            type="email"
                            onFocus={(e) => {
                                if (!e.target.className.includes('focus'))
                                    e.target.className += 'focus'
                            }}
                            onBlur={(e) => {
                                if (e.target.value == '') {
                                    e.target.className = e.target.className.replace('focus', '')
                                }
                            }}
                        />
                        <span data-placeholder="Email"></span>
                    </div>
                    <div className="txtb">
                        <input
                            type="password"
                            onFocus={(e) => {
                                if (!e.target.className.includes('focus'))
                                    e.target.className += 'focus'
                            }}
                            onBlur={(e) => {
                                if (e.target.value == '') {
                                    e.target.className = e.target.className.replace('focus', '')
                                }
                            }}
                        />
                        <span data-placeholder="Password"></span>
                    </div>
                    <a href="#">忘记密码？</a>
                    <button>登录</button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>已有账号？</h1>
                        <p>请使用您的账号进行登录</p>
                        <button className="ghost" id="signIn" onClick={signInChange}>
                            登录
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>没有账号?</h1>
                        <p>立即注册加入我们，和我们一起开始旅程吧</p>
                        <button className="ghost" id="signUp" onClick={signUPChange}>
                            注册
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
