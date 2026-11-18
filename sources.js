// 全資料の確認日：2026-11-17。引用は再利用許諾とは異なります。
const SOURCES = {
 a1:{rank:'A',title:'Stable Diffusionで三面図を作る方法',author:'AICG Seminar／吉川スタジオ',url:'https://yoshikawastudio.com/generate-three-views/',status:'本文・制作画像を確認。Maya→OpenPose→SD WebUI。画像6点を工程比較・批評のため限定引用。包括的転載許諾なし。'},
 a2:{rank:'A',title:'キャラクター三面図の作り方',author:'copainter team',url:'https://blog.copainter.ai/character-three-view-guide/',status:'本文・画像掲載確認。水平ガイドと整合性の説明を参照。画像不採用。'},
 a3:{rank:'A',title:'ChatGPT画像生成ガイド',author:'metacomi',url:'https://metacomi.net/gptimage2/guide.html',status:'本文・画像掲載確認。設定の言語化と段階的生成。転載許諾未確認のため画像不採用。'},
 a4:{rank:'A',title:'Production-Ready 3D References（指定動画）',author:'投稿者未確認',url:'https://www.youtube.com/watch?v=cHC6s3dCMHI',status:'取得制限で内容・投稿者・埋め込み再生未確認。根拠として未使用。'},
 a5:{rank:'A',title:'Generate Character Turnarounds',author:'Scenario',url:'https://help.scenario.com/articles/1419523552-generate-character-turnarounds',status:'本文・画像掲載確認。参照画像による角度別編集。更新で推奨モデルは変化。画像不採用。'},
 a6:{rank:'A',title:'Autodesk CG Festa 2026：VONS',author:'株式会社Too／株式会社VONS',url:'https://www.too.com/dc/report/2604_autodesk-cg-festa02_vons/',status:'本文・画像掲載確認。ChatGPTの4面図と3D化の事例。AI添削の効果実証とは区別。画像不採用。'},
 b1:{rank:'B',title:'copainterのAIアシスタントで三面図を作ろう',author:'copainter team',url:'https://blog.copainter.ai/threeviews/',status:'本文・入力／出力画像を確認。比較画像1点を装飾変更と背面推定の批評に限定引用。包括的転載許諾なし。'},
 b2:{rank:'B',title:'AIで三面図は作れるか',author:'unsketch 編集部',url:'https://unsketch.io/blog/ja/ai-character-sheet',status:'本文確認。角度と並びを分ける提案。個別の比較を普遍的なモデル性能とは扱わない。画像不採用。'},
 b3:{rank:'B',title:'My 4-Step System for Creating 3D Character References with AI',author:'Stefan Vaskevich／TOP 3D AI',url:'https://www.top3d.ai/learn/how-to-create-best-3d-character-references',status:'本文・画像掲載確認。構想→整理→パーツ→視点。画像不採用。'},
 b4:{rank:'B',title:'指定YouTube Cz6hNVE5e0M',author:'投稿者未確認',url:'https://www.youtube.com/watch?v=Cz6hNVE5e0M',status:'取得制限でタイトル・内容未確認。外部リンク／再生入口のみ。根拠として未使用。'},
 b5:{rank:'B',title:'ChatGPTで設計図を作り、Claude CodeにBlenderで3Dモデリングさせてみる',author:'nogson',url:'https://note.com/satofaction/n/n534c1804e7db',status:'本文確認。自動モデリング事例で、人が修正する本授業と目的が異なる。画像不採用。'},
 c1:{rank:'C',title:'AIでキャラデザ作成からモデル生成までやってみる',author:'shibe',url:'https://zenn.dev/szgk/articles/5e772afe9e8576',status:'本文・画像掲載確認。2024年の環境依存の記録。学習目的の注意書きあり。画像不採用。'},
 c2:{rank:'C',title:'3Dモデル生成AIを使ってガンプラスケールのフィギュアを作成する',author:'Sue',url:'https://note.com/daydreamdays/n/n56aec1b285eb',status:'本文・画像掲載確認。腕時計の位置不一致、薄肉の修正。3Dプリント用途の事例。画像不採用。'},
 meta:{rank:'公式',title:'Meta：Models',author:'Meta',url:'https://dev.meta.ai/docs/models',status:'公式確認。Muse Sparkは画像等→文章、Muse Imageは文章・画像→画像。'},
 vision:{rank:'公式',title:'Meta：Media understanding',author:'Meta',url:'https://dev.meta.ai/docs/media-understanding',status:'公式確認。複数画像と文章を分析するAPI。アプリの画面操作は未確認。'},
 image:{rank:'公式',title:'Meta：Build with Muse Image',author:'Meta',url:'https://dev.meta.ai/resources/blog/build-with-muse-Image',status:'公式確認。生成・参照・編集の開発者向け記事。'},
 pricing:{rank:'公式',title:'Meta：Pricing and rate limits',author:'Meta',url:'https://dev.meta.ai/docs/pricing-rate-limits',status:'API Muse Image $0.01/生成画像。Spark Standard入力$1.25・出力$4.25/100万トークン。アプリ料金とは別。'},
 geo:{rank:'公式',title:'Meta：Geographic Use Policy',author:'Meta',url:'https://dev.meta.ai/legal/geographic-use-policy',status:'2026-11-09改定方針確認。地域リストだけでは個別アカウントの利用可否を保証できない。'},
 access:{rank:'公式',title:'Meta：Quickstart',author:'Meta',url:'https://dev.meta.ai/docs/quickstart',status:'公式確認。APIダッシュボードのキー取得が開発者向け入口。本授業ではAPI設定なし。'},
 maya:{rank:'公式',title:'Maya：Image plane menu（2025）',author:'Autodesk',url:'https://help.autodesk.com/cloudhelp/2025/ENU/Maya-Basics/files/GUID-6BA2B714-0245-45FB-BCE8-7FDC68838993.htm',status:'公式確認。ビューパネルのView > Image Plane > Import Image。'},
 maya2:{rank:'公式',title:'Maya：Create, edit, or position an image plane',author:'Autodesk',url:'https://help.autodesk.com/cloudhelp/2017/ENU/Maya/files/GUID-F72F8E1B-EFFE-400E-BD92-5441BE9CD28F.htm',status:'旧版公式。正投影ビューへの取り込みを補足。実機バージョンで表記確認。'},
 move:{rank:'公式',title:'Maya：Move objects and components',author:'Autodesk',url:'https://help.autodesk.com/cloudhelp/2025/ENU/Maya-Basics/files/GUID-ABF1A141-7860-4234-889B-00278F20B9A3.htm',status:'公式確認。対象を選択しWで移動ツール、軸方向に移動。'},
 soft:{rank:'公式',title:'Maya：Soft Select components',author:'Autodesk',url:'https://help.autodesk.com/cloudhelp/2025/ENU/Maya-Modeling/files/GUID-FF7C8670-97C7-4C13-9A6F-3B0A8F881EC9.htm',status:'公式確認。BでSoft Selection、影響範囲を調整。'},
 memovis:{rank:'追加',title:'MemoVis：3Dデザインの生成AIフィードバック研究',author:'Chen Chen et al.',url:'https://arxiv.org/abs/2409.06082',status:'論文概要確認。コメント・視点・参考画像を組み合わせる研究。学生作品の改善保証ではない。'},
 instruct:{rank:'追加',title:'InstructMesh：Selective Refinement of Generative 3D Models',author:'MIT CSAIL／著者チーム',url:'https://hcie.csail.mit.edu/research/instructmesh/instructmesh.html',status:'研究紹介確認。製造向け形状修正とプレビュー。ゲーム用の適合保証ではない。'},
 rights:{rank:'権利',title:'文化庁：文化芸術活動の法的問題 FAQ',author:'文化庁',url:'https://www.bunka.go.jp/seisaku/bunka_gyosei/kibankyoka/faq/index.html',status:'出典だけでは引用は成立しない。公表済・正当範囲・明確区別・主従関係を確認。'},
 policy:{rank:'権利',title:'AICG Seminar：著作権・リンク方針',author:'AICG Seminar',url:'https://yoshikawastudio.com/privacy-policy/',status:'無断使用・転用禁止、リンク可。許諾素材とは扱わず、必要な批評引用に限定。'}
};
const IMAGES={
 maya:{file:'assets/images/maya.webp',title:'同じモデルを3方向に配置したMayaの画面',source:'a1'},
 template:{file:'assets/images/template.png',title:'img2img用にレンダリングした元画像',source:'a1'},
 pose:{file:'assets/images/pose.png',title:'同じ位置にそろえたOpenPose用画像',source:'a1'},
 controlnet:{file:'assets/images/controlnet.png',title:'ControlNet設定（原記事の注記を含む）',source:'a1'},
 result:{file:'assets/images/result.webp',title:'Stable Diffusionで生成した三面図',source:'a1'},
 angle:{file:'assets/images/angle-test.webp',title:'正面・斜め45度・側面の生成検証画面',source:'a1'},
 copainter:{file:'assets/images/copainter.png',title:'copainterの入力イラストと出力三面図',source:'b1'}
};
