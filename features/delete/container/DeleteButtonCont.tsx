'use client';


export default function DeleteButtonCont() {
  const handleDelete = () => {
    const confirmed = window.confirm('삭제하시겠습니까?');

    if (!confirmed) return;

    fetch('/api/member/notifications',{
      method: "DELETE"
      
    })
  };

  return {}
}
