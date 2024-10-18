import { MdMenu, MdSearch  } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

type NavItemProps = {
    name: string,
    active?: boolean
}

function NavItem({ name, active}: NavItemProps) {
    return(
        <li className={`shrink-0 flex flex-col items-center justify-center relative group ${active ? 'active' : ''} cursor-pointer`}>
            <span className="text-base font-bold text-[#555555] group-[.active]:text-[#639605] px-4">{name}</span>
            <div className="hidden group-[.active]:block w-full border-t-4 border-[#639605] rounded-t-[3px] absolute bottom-0"></div>
        </li>
    )
}

export default function Header() {
    return (
        <header className="bg-white">
            <div className="flex gap-6 py-[18px] min-[380px]:px-[18px] max-w-7xl my-auto justify-center items-center mx-auto overflow-y-clip">
                <MdMenu size={24} className="cursor-pointer flex-shrink-0" />
                <MdSearch size={24} className="hidden min-[380px]:block cursor-pointer flex-shrink-0" />
                <div className="min-w-[187px] text-center">
                    <svg width="186" height="25" viewBox="0 0 186 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.9655 23.5449C6.41609 23.5449 5.95344 23.0955 5.95344 22.5618V4.58424H1.67387C1.12446 4.58424 0.661804 4.13481 0.661804 3.6011V1.41009C0.661804 0.876379 1.12446 0.426941 1.67387 0.426941H15.3801C15.9295 0.426941 16.3921 0.876379 16.3921 1.41009V3.57301C16.3921 4.10672 15.9295 4.55615 15.3801 4.55615H10.927V22.5337C10.927 23.0674 10.4643 23.5168 9.91493 23.5168H6.9655V23.5449ZM34.7249 24.1348C28.5947 24.1348 25.4718 21.073 25.4718 15.0056C25.4718 11.3258 26.5995 8.65728 28.826 7.05615C30.6188 5.76402 32.614 5.59548 33.655 5.59548C36.6333 5.59548 41.6647 6.71908 41.6647 14.191C41.6647 15.4269 41.3756 16.5786 39.3515 16.5786H30.4453C30.7634 18.9944 32.2092 20.2022 34.7249 20.2022C35.9104 20.2022 37.1827 19.9775 38.484 19.5C38.5996 19.4719 38.7153 19.4438 38.831 19.4438C39.2358 19.4438 39.6406 19.6966 39.7852 20.0899L40.4213 21.8033C40.5948 22.2528 40.3924 22.7584 39.9587 23.0112C38.5996 23.7415 36.2285 24.1348 34.7249 24.1348ZM33.9731 9.21908C31.4574 9.21908 30.7345 11.2977 30.561 13.0674H37.096C36.9225 10.3708 35.9972 9.21908 33.9731 9.21908ZM57.2505 23.5449C56.7011 23.5449 56.2384 23.0955 56.2384 22.5618V12.0842C56.2384 9.78087 54.6191 9.4438 53.6649 9.4438C51.9588 9.4438 50.6287 10.0899 49.5588 11.4382C49.5877 11.691 49.5877 11.9719 49.5877 12.2809V22.5618C49.5877 23.0955 49.1251 23.5449 48.5757 23.5449H45.713C45.1636 23.5449 44.7009 23.0955 44.7009 22.5618V7.53368C44.7009 7.28087 44.8166 7.02806 44.9901 6.83144C45.1925 6.63481 45.4527 6.55054 45.713 6.55054H47.7082C48.1708 6.55054 48.5757 6.85953 48.6913 7.30896L48.7202 7.89885C49.3564 7.22469 51.1781 5.59548 54.3878 5.59548C57.2794 5.59548 61.1252 6.26964 61.1252 12.0842V22.5618C61.1252 23.0955 60.6626 23.5449 60.1132 23.5449H57.2505Z" fill="#5C514E"/>
                        <path d="M115.458 23.5449C114.909 23.5449 114.446 23.0955 114.446 22.5618V12.0842C114.446 9.78087 112.827 9.44379 111.873 9.44379C110.167 9.44379 108.837 10.0899 107.767 11.4382C107.796 11.691 107.796 11.9719 107.796 12.2809V22.5618C107.796 23.0955 107.333 23.5449 106.784 23.5449H103.921C103.372 23.5449 102.909 23.0955 102.909 22.5618V7.53368C102.909 7.28087 103.025 7.02806 103.198 6.83143C103.401 6.6348 103.661 6.55053 103.921 6.55053H105.916C106.379 6.55053 106.784 6.85952 106.899 7.30896L106.957 7.89884C107.593 7.22469 109.415 5.56738 112.625 5.56738C115.516 5.56738 119.362 6.24154 119.362 12.0561V22.5337C119.362 23.0674 118.899 23.5168 118.35 23.5168H115.458V23.5449Z" fill="#70A62D"/>
                        <path d="M71.9108 24.1348C68.8457 24.1348 63.6697 22.927 63.6697 14.8932C63.6697 11.691 64.5951 9.24718 66.4168 7.58988C68.3831 5.8483 70.7542 5.5674 71.9686 5.5674C73.7036 5.5674 75.294 6.07302 76.5085 7.02808V1.38201C76.5085 0.848303 76.9711 0.398865 77.5205 0.398865H80.3832C80.9326 0.398865 81.3953 0.848303 81.3953 1.38201V22.5337C81.3953 22.7865 81.2796 23.0393 81.1061 23.2359C80.9037 23.4326 80.6434 23.5168 80.3832 23.5168H77.8097C77.2892 23.5168 76.8554 23.1236 76.7976 22.618L76.7687 22.2528C75.8723 23.1236 74.3108 24.1348 71.9108 24.1348ZM72.7783 9.35954C70.6963 9.35954 68.4987 10.8202 68.4987 14.8932C68.4987 16.9157 69.0192 20.3146 72.6048 20.3146C74.1952 20.3146 75.7566 19.4438 76.5085 18.0955V11.1011C75.6699 9.94943 74.4265 9.35954 72.7783 9.35954Z" fill="#5C514E"/>
                        <path d="M151.285 23.5449C150.736 23.5449 150.273 23.0955 150.273 22.5618V12C150.273 10.3708 149.666 9.58424 148.394 9.58424C146.63 9.58424 145.676 10.5955 145.184 11.4382C145.213 11.691 145.213 11.9719 145.213 12.2809V22.5337C145.213 23.0674 144.75 23.5168 144.201 23.5168H141.28C140.731 23.5168 140.268 23.0674 140.268 22.5337V12C140.268 10.3708 139.661 9.58424 138.418 9.58424C137.03 9.58424 135.931 10.2022 135.179 11.4382C135.208 11.691 135.208 11.9719 135.208 12.2809V22.5337C135.208 23.0674 134.745 23.5168 134.196 23.5168H131.333C130.784 23.5168 130.321 23.0674 130.321 22.5337V7.53368C130.321 7.28087 130.437 7.02806 130.61 6.83144C130.813 6.63481 131.073 6.55054 131.333 6.55054H133.357C133.82 6.55054 134.254 6.85953 134.341 7.30896L134.398 7.95503C135.555 6.43818 137.29 5.62357 139.372 5.62357C141.772 5.62357 143.449 6.41009 144.374 7.95503C145.589 6.382 147.266 5.62357 149.406 5.62357C150.852 5.62357 155.247 5.62357 155.247 11.8876V22.5618C155.247 23.0955 154.784 23.5449 154.235 23.5449H151.285ZM182.515 23.9663C179.854 23.9663 176.703 22.9269 176.703 17.955V1.41009C176.703 0.876379 177.165 0.426941 177.715 0.426941H180.577C181.127 0.426941 181.589 0.876379 181.589 1.41009V17.618C181.589 19.0786 182.11 19.9213 183.035 19.9213C183.122 19.9213 183.238 19.9213 183.382 19.8932H183.498C183.903 19.8932 184.279 20.146 184.452 20.5112L185.233 22.3371C185.435 22.8427 185.204 23.4045 184.683 23.6292C184.076 23.8539 183.353 23.9663 182.515 23.9663Z" fill="#70A62D"/>
                        <path d="M19.1392 23.5449C18.5898 23.5449 18.1272 23.0955 18.1272 22.5618V7.53368C18.1272 6.99998 18.5898 6.55054 19.1392 6.55054H22.0308C22.5802 6.55054 23.0429 6.99998 23.0429 7.53368V22.5618C23.0429 23.0955 22.5802 23.5449 22.0308 23.5449H19.1392Z" fill="#5C514E"/>
                        <path d="M123.381 23.5449C122.832 23.5449 122.369 23.0955 122.369 22.5618V7.53367C122.369 6.99997 122.832 6.55053 123.381 6.55053H126.273C126.822 6.55053 127.285 6.99997 127.285 7.53367V22.5618C127.285 23.0955 126.822 23.5449 126.273 23.5449H123.381ZM91.3714 24.1348C87.0629 24.1348 84.287 21.9719 84.287 18.6292C84.287 16.4101 85.5015 12.7303 93.6558 12.7303C93.916 12.7303 94.263 12.7303 95.0438 12.7584V11.1854C95.0438 10.6797 95.0438 9.49997 92.4413 9.49997C91.3425 9.49997 90.3594 9.66851 89.4051 10.0056C89.2895 10.0337 89.1738 10.0618 89.0581 10.0618C88.769 10.0618 88.4798 9.94941 88.3063 9.72469L86.8316 8.09547C86.6292 7.87075 86.5424 7.56176 86.6003 7.25278C86.6581 6.94379 86.8605 6.69098 87.1497 6.55053C88.422 5.93255 90.3594 5.56738 92.4702 5.56738C95.2173 5.56738 99.8438 6.26963 99.8438 11.0449V22.5337C99.8438 23.0674 99.3812 23.5168 98.8318 23.5168H96.3161C95.8534 23.5168 95.4775 23.2359 95.3329 22.8146C94.0028 23.7134 92.6726 24.1348 91.3714 24.1348ZM94.0606 15.9606C90.7353 15.9606 89.2316 16.7191 89.2316 18.3764C89.2316 19.7809 90.0991 20.455 91.863 20.455C93.251 20.455 94.263 20.0337 95.0438 19.6123V15.9887C94.5811 15.9606 94.2919 15.9606 94.0606 15.9606ZM165.31 24.1348C161.001 24.1348 158.225 21.9719 158.225 18.6292C158.225 16.4101 159.44 12.7303 167.594 12.7303C167.854 12.7303 168.201 12.7303 168.982 12.7584V11.1854C168.982 10.6797 168.982 9.49997 166.38 9.49997C165.281 9.49997 164.298 9.66851 163.343 10.0056C163.228 10.0337 163.112 10.0618 162.996 10.0618C162.707 10.0618 162.418 9.94941 162.245 9.72469L160.77 8.09547C160.568 7.87075 160.481 7.56176 160.539 7.25278C160.596 6.94379 160.799 6.69098 161.088 6.55053C162.36 5.93255 164.298 5.56738 166.409 5.56738C169.156 5.56738 173.782 6.26963 173.782 11.0449V22.5337C173.782 23.0674 173.319 23.5168 172.77 23.5168H170.283C169.85 23.5168 169.445 23.2359 169.3 22.8146C167.941 23.7134 166.611 24.1348 165.31 24.1348ZM167.999 15.9606C164.674 15.9606 163.17 16.7191 163.17 18.3764C163.17 19.7809 164.037 20.455 165.801 20.455C167.189 20.455 168.172 20.0337 168.982 19.6123V15.9887C168.519 15.9606 168.23 15.9606 167.999 15.9606Z" fill="#70A62D"/>
                        <path d="M20.585 5.08985C19.2259 5.08985 18.0982 4.05052 18.0982 2.75839C18.0982 1.49434 19.2259 0.455017 20.585 0.455017C21.944 0.455017 23.0717 1.52243 23.0717 2.75839C23.0717 4.02243 21.9729 5.08985 20.585 5.08985Z" fill="#5C514E"/>
                        <path d="M124.827 5.11799C123.468 5.11799 122.34 4.07866 122.34 2.78653C122.34 1.52248 123.468 0.483154 124.827 0.483154C126.186 0.483154 127.314 1.55057 127.314 2.78653C127.314 4.07866 126.186 5.11799 124.827 5.11799Z" fill="#70A62D"/>
                    </svg>
                </div>
                <AiOutlineUser size={24} className="cursor-pointer flex-shrink-0" />
                <PiShoppingCartSimpleLight size={24} className="hidden min-[380px]:block cursor-pointer flex-shrink-0" />
            </div>
            <nav className="border-t border-[#DBDBDB]">
                <ul className="flex overflow-y-scroll h-[50px] items-stretch shadow-md gap-2 px-9 scroll-hidden md:justify-center">
                    <NavItem name="Mis datos"/>
                    <NavItem name="Mis tareas" active/>
                    <NavItem name="Mis devoluciones"/>
                    <NavItem name="Mis comunicaciones"/>
                    <NavItem name="Mis mejores amigos"/>
                </ul>
            </nav>
        </header>
    )
}