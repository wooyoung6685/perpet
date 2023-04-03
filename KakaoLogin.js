import React from 'react';

function KakaoLogin() {
  const REST_API_KEY = "52d0be4ae43601c439b012f8889eebf7";
  const REDIRECT_URI = "https://perpet.vercel.app/";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const kakaologin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }
  return (
    <React.Fragment>
      <button onClick={kakaologin}>kakaologin</button>
    </React.Fragment>
  )
}

export default KakaoLogin;
