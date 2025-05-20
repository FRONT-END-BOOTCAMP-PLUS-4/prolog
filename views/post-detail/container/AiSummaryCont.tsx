import AiSummaryPres from '../presentational/AiSummaryPres';

export default function AiSummaryCont() {
  const summaryList = [
    { title: '제목1' },
    { title: '제목2' },
    { title: '제목3' },
    { title: '제목4' },
    { title: '제목5' },
  ];

  return <AiSummaryPres summaryList={summaryList} />;
}
