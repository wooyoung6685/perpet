function KakaoLogin() {
  const REST_API_KEY = "52d0be4ae43601c439b012f8889eebf7";
  const REDIRECT_URI = "http://localhost:3000";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const kakaologin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <>
      <button className='loginpage_button-kakao' onClick={kakaologin}>
        <img src="../images/Member/kakao.png" alt="카카오 로그인 이동" />
      </button>
    </>
  );
}

export default KakaoLogin;
