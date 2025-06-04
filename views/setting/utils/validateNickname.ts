export function validateNickname(nickname: string): string | null {
  if (!nickname) return '닉네임을 입력해주세요.';
  if (!/^[A-Za-z]+$/.test(nickname)) {
    return '닉네임은 영어 알파벳만 사용할 수 있으며, 띄어쓰기나 특수문자는 사용할 수 없습니다.';
  }
  return null;
}
