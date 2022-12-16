/*
  L = Leader (총책임자)
  M = MainCategory (분과대분류)
  B = Board (Board 위원장)
  F = Facilitator(Facilitator 간사)
  C = Classification(분류)
  U = User (담당자)
*/

const data = [[
  {index:1 , title : "김진국 담당" , item : "L0001" , parent:"" ,depth:1, YN : "Y"}
  ,{index:1 , title : "DARM" , item : "M0001" , parent:"L0001" ,depth:2, YN : "Y"}
  ,{index:1 , title : "Board 위원장\n김신순 담당" , item : "B0001" , parent:"M0001" ,depth:3, YN : "Y"}
  ,{index:1 , title : "간사:임찬중TL" , item : "F0001" , parent:"B0001" ,depth:4, YN : "Y"}
  ,{index:1 , title : "Market" , item : "C0001" , parent:"" ,depth:5, YN : "Y"}
  ,{index:1 , title : "Design" , item : "C0002" , parent:"" ,depth:6, YN : "Y"}
  ,{index:1 , title : "PE" , item : "C0003" , parent:"" ,depth:7, YN : "Y"}
  ,{index:1 , title : "Solution" , item : "C0004" , parent:"" ,depth:8, YN : "Y"}
  ,{index:1 , title : "HRS" , item : "C0005" , parent:"" ,depth:9, YN : "Y"}
  ,{index:1 , title : "HURS" , item : "C0006" , parent:"" ,depth:10, YN : "Y"}
  ,{index:1 , title : "PKG" , item : "C0007" , parent:"" ,depth:11, YN : "Y"}
  ,{index:1 , title : "TSV" , item : "C0008" , parent:"" ,depth:12, YN : "Y"}
  ,{index:1 , title : "QRA" , item : "C0009" , parent:"" ,depth:13, YN : "Y"}
  ,{index:1 , title : "강욱성 담당" , item : "U0001" , parent:"B0001" ,depth:5, YN : "Y"}
  ,{index:1 , title : "김민호 PL" , item : "U0002" , parent:"B0001" ,depth:5, YN : "Y"}
  ,{index:1 , title : "정인철 담당" , item : "U0003" , parent:"U0002" ,depth:6, YN : "Y"}
  ,{index:1 , title : "정인철 담당" , item : "U0004" , parent:"U0002" ,depth:6, YN : "Y"}
  ,{index:1 , title : "정우식 담당" , item : "U0005" , parent:"U0003" ,depth:7, YN : "Y"}
  ,{index:1 , title : "정우식 담당" , item : "U0006" , parent:"U0004" ,depth:7, YN : "Y"}
  ,{index:1 , title : "-" , item : "U0007" , parent:"U0005" ,depth:8, YN : "Y"}
  ,{index:1 , title : "-" , item : "U0008" , parent:"U0006" ,depth:8, YN : "Y"}
  ,{index:1 , title : "김선순 담당" , item : "U0009" , parent:"U0007" ,depth:9, YN : "Y"}
  ,{index:1 , title : "정수옥 담당" , item : "U00010" , parent:"U0008" ,depth:9, YN : "Y"}
  ,{index:1 , title : "진성곤/박찬하/\n천영일/김영환/\n박창헌 담당" , item : "U00011" , parent:"U0009" ,depth:10, YN : "Y"}
  ,{index:1 , title : "최동구 담당\n서재욱/신준형/진승우\n윤효근팀장/황의성DE" , item : "U00012" , parent:"U0010" ,depth:10, YN : "Y"}
  ,{index:1 , title : "황찬기 PL" , item : "U00013" , parent:"U0011" ,depth:11, YN : "Y"}
  ,{index:1 , title : "이희진 PL" , item : "U00014" , parent:"U0012" ,depth:11, YN : "Y"}
  ,{index:1 , title : "김정수 담당" , item : "U00015" , parent:"U0013" ,depth:12, YN : "Y"}
  ,{index:1 , title : "김귀옥 PL" , item : "U00016" , parent:"U0014" ,depth:12, YN : "Y"}
  ,{index:1 , title : "김상덕 담당" , item : "U00017" , parent:"U0015" ,depth:13, YN : "Y"}
  ,{index:1 , title : "이길재 PL" , item : "U00018" , parent:"U0016" ,depth:13, YN : "Y"}
],
[
  {index:2 , title : "김진국 담당" , item : "L0001" , parent:"" ,depth:1, YN : "Y"}
  ,{index:2 , title : "HAND" , item : "M0001" , parent:"L0001" ,depth:2, YN : "Y"}
  ,{index:2 , title : "Board 위원장\n정성용 담당" , item : "B0001" , parent:"M0001" ,depth:3, YN : "Y"}
  ,{index:2 , title : "간사:허민영TL" , item : "F0001" , parent:"B0001" ,depth:4, YN : "Y"}
  ,{index:2 , title : "Market" , item : "C0001" , parent:"" ,depth:5, YN : "N"}
  ,{index:2 , title : "Design" , item : "C0002" , parent:"" ,depth:6, YN : "N"}
  ,{index:2 , title : "PE" , item : "C0003" , parent:"" ,depth:7, YN : "N"}
  ,{index:2 , title : "Solution" , item : "C0004" , parent:"" ,depth:8, YN : "N"}
  ,{index:2 , title : "HRS" , item : "C0005" , parent:"" ,depth:9, YN : "N"}
  ,{index:2 , title : "HURS" , item : "C0006" , parent:"" ,depth:10, YN : "N"}
  ,{index:2 , title : "PKG" , item : "C0007" , parent:"" ,depth:11, YN : "N"}
  ,{index:2 , title : "TSV" , item : "C0008" , parent:"" ,depth:12, YN : "N"}
  ,{index:2 , title : "QRA" , item : "C0009" , parent:"" ,depth:13, YN : "N"}
  ,{index:2 , title : "강진수 담당" , item : "U0001" , parent:"B0001" ,depth:5, YN : "Y"}
  ,{index:2 , title : "조광행 PL" , item : "U0002" , parent:"B0001" ,depth:5, YN : "Y"}
  ,{index:2 , title : "정우표 담당" , item : "U0003" , parent:"U0002" ,depth:6, YN : "Y"}
  ,{index:2 , title : "이승필 담당" , item : "U0004" , parent:"U0002" ,depth:6, YN : "Y"}
  ,{index:2 , title : "한영수 담당" , item : "U0005" , parent:"U0003" ,depth:7, YN : "Y"}
  ,{index:2 , title : "전찬우 PL" , item : "U0006" , parent:"U0004" ,depth:7, YN : "Y"}
  ,{index:2 , title : "이재성 담당" , item : "U0007" , parent:"U0005" ,depth:8, YN : "Y"}
  ,{index:2 , title : "장승호 담당" , item : "U0008" , parent:"U0006" ,depth:8, YN : "Y"}
  ,{index:2 , title : "정성용 담당" , item : "U0009" , parent:"U0007" ,depth:9, YN : "Y"}
  ,{index:2 , title : "남상혁 TL" , item : "U00010" , parent:"U0008" ,depth:9, YN : "Y"}
  ,{index:2 , title : "진성곤/박찬하/\n천영일/김영환/\n박창헌 담당" , item : "U00011" , parent:"U0009" ,depth:10, YN : "Y"}
  ,{index:2 , title : "곽상현/정채오\n오세영/김성순/정성훈/\n김은미 팀장" , item : "U00012" , parent:"U0010" ,depth:10, YN : "Y"}
  ,{index:2 , title : "황찬기 PL" , item : "U00013" , parent:"U0011" ,depth:11, YN : "Y"}
  ,{index:2 , title : "이희진 PL" , item : "U00014" , parent:"U0012" ,depth:11, YN : "Y"}
  ,{index:2 , title : "-" , item : "U00015" , parent:"U0013" ,depth:12, YN : "Y"}
  ,{index:2 , title : "-" , item : "U00016" , parent:"U0014" ,depth:12, YN : "Y"}
  ,{index:2 , title : "김상덕 담당" , item : "U00017" , parent:"U0015" ,depth:13, YN : "Y"}
  ,{index:2 , title : "이길재 PL" , item : "U00018" , parent:"U0016" ,depth:13, YN : "Y"}
],
[
  {index:3 , title : "김진국 담당" , item : "L0001" , parent:"" ,depth:1, YN : "Y"}
  ,{index:3 , title : "PCM" , item : "M0001" , parent:"L0001" ,depth:2, YN : "Y"}
  ,{index:3 , title : "Board 위원장\n김태훈 담당" , item : "B0001" , parent:"M0001" ,depth:3, YN : "Y"}
  ,{index:3 , title : "간사:고민성TL" , item : "F0001" , parent:"B0001" ,depth:4, YN : "Y"}
  ,{index:3 , title : "Market" , item : "C0001" , parent:"" ,depth:5, YN : "N"}
  ,{index:3 , title : "Design" , item : "C0002" , parent:"" ,depth:6, YN : "N"}
  ,{index:3 , title : "PE" , item : "C0003" , parent:"" ,depth:7, YN : "N"}
  ,{index:3 , title : "Solution" , item : "C0004" , parent:"" ,depth:8, YN : "N"}
  ,{index:3 , title : "HRS" , item : "C0005" , parent:"" ,depth:9, YN : "N"}
  ,{index:3 , title : "HURS" , item : "C0006" , parent:"" ,depth:10, YN : "N"}
  ,{index:3 , title : "PKG" , item : "C0007" , parent:"" ,depth:11, YN : "N"}
  ,{index:3 , title : "TSV" , item : "C0008" , parent:"" ,depth:12, YN : "N"}
  ,{index:3 , title : "QRA" , item : "C0009" , parent:"" ,depth:13, YN : "N"}
  ,{index:3 , title : "강옥성 담당" , item : "U0001" , parent:"B0001" ,depth:5, YN : "Y"}
  ,{index:3 , title : "고현석 PL" , item : "U0002" , parent:"B0001" ,depth:5, YN : "Y"}
  ,{index:3 , title : "주양성 담당" , item : "U0003" , parent:"U0002" ,depth:6, YN : "Y"}
  ,{index:3 , title : "김택승 담당" , item : "U0004" , parent:"U0002" ,depth:6, YN : "Y"}
  ,{index:3 , title : "이영대 담당" , item : "U0005" , parent:"U0003" ,depth:7, YN : "Y"}
  ,{index:3 , title : "정승주 PL" , item : "U0006" , parent:"U0004" ,depth:7, YN : "Y"}
  ,{index:3 , title : "박일 담당" , item : "U0007" , parent:"U0005" ,depth:8, YN : "Y"}
  ,{index:3 , title : "권형현 PL" , item : "U0008" , parent:"U0006" ,depth:8, YN : "Y"}
  ,{index:3 , title : "김태훈 담당" , item : "U0009" , parent:"U0007" ,depth:9, YN : "Y"}
  ,{index:3 , title : "이형동 팀장" , item : "U00010" , parent:"U0008" ,depth:9, YN : "Y"}
  ,{index:3 , title : "진성곤/박찬하/\n천영일/김영환/\n박창헌 담당" , item : "U00011" , parent:"U0009" ,depth:10, YN : "Y"}
  ,{index:3 , title : "채수진/조성래\n서재욱/오재근\n/구효철/이현민 팀장" , item : "U00012" , parent:"U0010" ,depth:10, YN : "Y"}
  ,{index:3 , title : "-" , item : "U00013" , parent:"U0011" ,depth:11, YN : "Y"}
  ,{index:3 , title : "-" , item : "U00014" , parent:"U0012" ,depth:11, YN : "Y"}
  ,{index:3 , title : "-" , item : "U00015" , parent:"U0013" ,depth:12, YN : "Y"}
  ,{index:3 , title : "-" , item : "U00016" , parent:"U0014" ,depth:12, YN : "Y"}
  ,{index:3 , title : "-" , item : "U00017" , parent:"U0015" ,depth:13, YN : "Y"}
  ,{index:3 , title : "-" , item : "U00018" , parent:"U0016" ,depth:13, YN : "Y"}
],
[
  {index:4 , title : "김진국 담당" , item : "L0001" , parent:"" ,depth:1, YN : "Y"}
  ,{index:4 , title : "COMMON" , item : "M0001" , parent:"L0001" ,depth:2, YN : "Y"}
  ,{index:4 , title : "Modeling" , item : "C0001" , parent:"" ,depth:5, YN : "Y"}
  ,{index:4 , title : "AT" , item : "C0002" , parent:"" ,depth:6, YN : "Y"}
  ,{index:4 , title : "MI" , item : "C0003" , parent:"" ,depth:7, YN : "Y"}
  ,{index:4 , title : "MASK" , item : "C0004" , parent:"" ,depth:8, YN : "Y"}
  ,{index:4 , title : "박성계 담당" , item : "U0001" , parent:"M0001" ,depth:5, YN : "Y"}
  ,{index:4 , title : "이승철 담당\n오동연/서지웅/\n서용현/문정언 팀장" , item : "U0002" , parent:"M0001" ,depth:5, YN : "Y"}
  ,{index:4 , title : "이기정 담당" , item : "U0003" , parent:"U0002" ,depth:6, YN : "Y"}
  ,{index:4 , title : "이성호/이주희/\n유종희/이태권 팀장" , item : "U0004" , parent:"U0002" ,depth:6, YN : "Y"}
  ,{index:4 , title : "이성훈 담당" , item : "U0005" , parent:"U0003" ,depth:7, YN : "Y"}
  ,{index:4 , title : "이병호 담당\n심규찬 팀장" , item : "U0006" , parent:"U0004" ,depth:7, YN : "Y"}
  ,{index:4 , title : "정태우 담당" , item : "U0007" , parent:"U0005" ,depth:8, YN : "Y"}
  ,{index:4 , title : "박의상 팀장" , item : "U0008" , parent:"U0006" ,depth:8, YN : "Y"}
]];

export default data;