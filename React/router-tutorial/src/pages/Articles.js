import { NavLink, Outlet } from 'react-router-dom'; //css 속성을 적용하기 위해 NA
//Link

const Articles = () => {
    return (
        <div>
            <Outlet />
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
};

const ArticleItem = ({ id }) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };

    return (
        <li>
            <NavLink
                to={`/articles/${id}`} //${id}를 통해서 코드를 최적화
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                게시글{id}
            </NavLink>
        </li>
    ) //<NavLink>를 통해서 반복되는 코드를 최적화
}

// return (
//     <div>
//         <Outlet /> {/* Article 컴포넌트에서 제공하는 Outlet 컴포넌트 Route의 children으로 들어감*/}
//         <ul>
//             <li>
//                 <NavLink
//                     to="/articles/1"
//                     style={({ isActive }) => (isActive ? activeStyle : undefined)}
//                 >
//                     게시글 1
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/articles/2"
//                     style={({ isActive }) => (isActive ? activeStyle : undefined)}
//                 >
//                     게시글 2</NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/articles/3"
//                     style={({ isActive }) => (isActive ? activeStyle : undefined)}
//                 >
//                     게시글 3</NavLink>
//             </li>
//         </ul>
//     </div>
// );
// };

export default Articles;