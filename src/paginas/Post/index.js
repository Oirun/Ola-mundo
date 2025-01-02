import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown"
import "./Post.css";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

export default function Post() {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    const outrosPosts = posts.sort(() => Math.random() - 0.5);
    const quatroPosts = outrosPosts.filter(post => (post.id !== Number(parametros.id)))

    if (!post) {
        return <NaoEncontrada />
    }

    return (
        <PaginaPadrao>
            <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h3 className="subtitulo">Outros posts que você pode gostar</h3>

                <ul className="posts">
                    {quatroPosts.slice(0,4).map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            </PostModelo>
        </PaginaPadrao>
    )
}