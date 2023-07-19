import Link from "next/link";

const { Wrapper, Ul, Li } = require("@/app/styles/mobileNav.style");

export const MobileNav = () => {
    return (
        <Wrapper>
            <div>
                <Ul>
                    <Li>
                        <Link href="/">Home</Link>
                    </Li>

                    <Li>
                        <Link href="/about">About us</Link>
                    </Li>

                    <Li>
                        <Link href="/our-works">Our Works</Link>
                    </Li>

                    <Li>
                        <Link href="/donate">Donate</Link>
                    </Li>

                    <Li>
                        <Link href="/faq">FAQ</Link>
                    </Li>
                </Ul>

                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 25 25"
                        fill="none"
                    >
                        <g clip-path="url(#clip0_255_305)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.4712 12.5001L24.3847 3.58663C25.2052 2.76614 25.2052 1.43586 24.3847 0.615486C23.5642 -0.205006 22.234 -0.205006 21.4135 0.615486L12.5 9.52903L3.58642 0.615369C2.76593 -0.205123 1.43577 -0.205123 0.615281 0.615369C-0.205094 1.43586 -0.205094 2.76614 0.615281 3.58651L9.52883 12.4999L0.615281 21.4135C-0.205094 22.234 -0.205094 23.5643 0.615281 24.3846C1.43577 25.2051 2.76593 25.2051 3.58642 24.3846L12.5 15.4711L21.4135 24.3846C22.2339 25.2051 23.5642 25.2051 24.3847 24.3846C25.2052 23.5641 25.2052 22.234 24.3847 21.4135L15.4712 12.5001Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_255_305">
                                <rect width="25" height="25" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </Wrapper>
    );
};
