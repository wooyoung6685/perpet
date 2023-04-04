import React, { useEffect } from "react";

const NaverLogin = ({ setGetToken, setUserInfo }) => {

    const { naver } = window;
    const NAVER_CLIENT_ID = "W9TXqthoVqnsjHI3JSFD";
    const NAVER_CALLBACK_URL = "https://perpet.vercel.app/";

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false,
            loginButton: { color: 'green', type: 2, height: 40, },
            callbackHandle: true,
        });
        naverLogin.init();

        naverLogin.getLoginStatus(async function (status) {
            if (status) {
                const userid = naverLogin.user.getEmail();
                const username = naverLogin.user.getName();
                setUserInfo({ userid, username }); // 업데이트
            }
        });
    };

    const userAccessToken = () => {
        window.location.href.includes('access_token') && getToken();
    };

    const getToken = () => {
        const token = window.location.href.split('=')[1].split('&')[0];
        setGetToken(token); // 업데이트
        return token;
    };

    useEffect(() => {
        initializeNaverLogin();
        userAccessToken();
    }, []);

    return (
        <>
            <div id="naverIdLogin" ></div>
        </>
    );
};

export default NaverLogin;