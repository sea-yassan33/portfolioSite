const { useState, useEffect, } = React;

function App() {
    // スタイルオブジェクトの定義
    const styles = {
        spanStyle :"label label-default",
        tagBtn: "btn btn-sm btn-outline-dark me-2",

    }

    // 状態管理
    const [works, setWorks] = useState([]);


    // JSONデータを取得して設定
    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setWorks(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    // コンポーネントのレンダリング
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 pt-3">
                    <h1 className="page-header">Collection of works</h1>
                </div>
            </div>
            {works.map((work, index) => (
                <div className="row product" key={index}>
                    <div className="row product">
                        <hr className="pdHrStyle"/>
                        <div className="col-md-4">
                            {work.vercelLink && (
                                <a href={work.vercelLink} target="_blank">
                                    <img src={work.imageUrl} alt="Image from Gyazo" width="100%" height="220"/>
                                </a>
                            )}
                            {!work.vercelLink && (
                                <a>
                                    <img src={work.imageUrl} alt="Image from Gyazo" width="100%" height="220"/>
                                </a>
                            )}     
                        </div>
                        <div className="col-md-8">
                            <h2>{work.title}</h2>
                            <p>
                                <span className={`${styles.spanStyle}`}>Creat:{work.createDate}</span>
                                <span className={`${styles.spanStyle}`}>Update:{work.updateDate}</span>
                            </p>
                            <p>
                                {work.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className={styles.spanStyle}>{tag}</span>
                                ))}
                            </p>
                            <p>
                                <a>概要：</a><br/>
                                <a>{work.description}</a><br/>
                                <div className="my-2">
                                    {work.githubLink &&(
                                        <a href={work.githubLink} className={`${styles.tagBtn} pd-github-btn`} target="_blank">
                                            <img src="./img/github_logo.png" alt="gitHub" width="100%" height="24"/>
                                        </a>
                                    )}
                                    {work.vercelLink && (
                                        <a href={work.vercelLink} className={`${styles.tagBtn} pd-github-btn`} target="_blank">
                                            <img src="./img/vercel_logo.png" alt="gitHub" width="100%" height="24"/>
                                        </a>
                                    )}
                                    {work.qiitaLink && (
                                        <a href={work.qiitaLink} className={`${styles.tagBtn} pd-github-btn`} target="_blank">
                                            <img src="./img/qiita_logo.png" alt="gitHub" width="100%" height="24"/>
                                        </a>
                                    )}
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ルート要素にAppコンポーネントをレンダリング
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);