export async function fetchUserProfile() {
  const res = await fetch('/api/member/settings', {
    method: 'GET',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('프로필 조회 실패');
  const data = await res.json();
  return data.data;
}

export async function updateUserProfile(payload: {
  name?: string;
  introduction?: string;
  profileImg?: string | null;
  backgroundImg?: string | null;
}) {
  const res = await fetch('/api/member/settings', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include',
  });
  if (!res.ok) throw new Error('이미 사용 중인 닉네임입니다.');
  const data = await res.json();
  return data.data;
}

export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append('img', file);
  const res = await fetch('/api/member/posts/upload', {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });
  if (!res.ok) throw new Error('이미지 업로드 실패');
  const data = await res.json();
  return data.data;
}

export async function deleteUserAccount() {
  const res = await fetch('/api/member/settings', {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('회원 탈퇴 실패');
  return true;
}
