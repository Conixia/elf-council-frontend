import React, { ReactElement, ReactNode } from "react";

import BorderColorIcon from "@material-ui/icons/BorderColor";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import ForumIcon from "@material-ui/icons/Forum";
import HomeIcon from "@material-ui/icons/Home";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import LockIcon from "@material-ui/icons/Lock";
import PeopleIcon from "@material-ui/icons/People";
import Link from "next/link";
import { t } from "ttag";
import tw from "src/elf-tailwindcss-classnames";

export default function Sidebar(): ReactElement {
  return (
    <div className={tw("md:w-3/12", "w-6/12", "h-screen")}>
      <div className={tw("border-b", "py-3", "mt-1", "flex", "justify-around")}>
        <ElementLogo />
      </div>
      <div className={tw("p-4", "space-y-14")}>
        <div className={tw("space-y-4")}>
          <SidebarLink
            link="/"
            label={t`Overview`}
            icon={<HomeIcon className={tw("text-blue-400")} />}
          />
          <SidebarLinkExternal
            link="https://snapshot.org/#/element-finance.eth"
            label={t`Proposals`}
            icon={<BorderColorIcon className={tw("text-blue-400")} />}
          />
          <SidebarLink
            link="/leaderboard"
            label={t`Leaderboard`}
            icon={<PeopleIcon className={tw("text-blue-400")} />}
          />
          <SidebarLink
            link="/delegates"
            label={t`Delegate`}
            icon={<HowToVoteIcon className={tw("text-blue-400")} />}
          />
          <SidebarLinkExternal
            link="https://forum.element.fi"
            label={t`Forum`}
            icon={<ForumIcon className={tw("text-blue-400")} />}
          />

          <SidebarLink
            link="/resources"
            label={t`Resources`}
            icon={<CollectionsBookmarkIcon className={tw("text-blue-400")} />}
          />
          <SidebarLink
            link="/rewards"
            label={t`Rewards`}
            icon={<LockIcon className={tw("text-blue-400")} />}
          />
        </div>
        <div className={tw("space-y-6")}></div>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  link: string;
  label: string;
  icon: ReactNode;
}

function SidebarLink(props: SidebarLinkProps): ReactElement {
  const { link, label, icon } = props;
  return (
    <div>
      <Link href={link} passHref>
        <a href={link}>
          <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
            {icon}
            <p className="text-blue-400  ">{label}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

function SidebarLinkExternal(props: SidebarLinkProps): ReactElement {
  const { link, label, icon } = props;
  return (
    <div>
      <a href={link}>
        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
          {icon}
          <p className="text-blue-400  ">{label}</p>
        </div>
      </a>
    </div>
  );
}

/**
 * Oºo Element
 *
 * @returns svg logo
 */
function ElementLogo(): ReactElement {
  return (
    <svg
      width="161"
      height="53"
      viewBox="0 0 161 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="3"
        y="7"
        width="44"
        height="37"
      >
        <path
          d="M20.1483 34.4499C14.2723 37.0757 7.38017 34.4409 4.75438 28.5648C2.1286 22.6888 4.76347 15.7967 10.6395 13.1709C16.5156 10.5451 23.4076 13.18 26.0334 19.056C28.6592 24.932 26.0244 31.8241 20.1483 34.4499Z"
          fill="black"
        />
        <path
          d="M41.3156 22.4646C37.2475 24.2825 32.4761 22.4583 30.6582 18.3903C28.8404 14.3223 30.6645 9.55083 34.7326 7.73298C38.8006 5.91513 43.572 7.73926 45.3899 11.8073C47.2077 15.8753 45.3836 20.6468 41.3156 22.4646Z"
          fill="black"
        />
        <path
          d="M38.463 42.5315C35.186 43.9959 31.3423 42.5264 29.878 39.2494C28.4136 35.9724 29.883 32.1287 33.16 30.6643C36.4371 29.1999 40.2807 30.6694 41.7451 33.9464C43.2095 37.2234 41.74 41.0671 38.463 42.5315Z"
          fill="black"
        />
      </mask>
      <g mask="url(#mask0)">
        <circle
          cx="27.2771"
          cy="26.4914"
          r="31.1507"
          transform="rotate(65.9219 27.2771 26.4914)"
          fill="#1568CA"
        />
        <circle
          cx="27.7559"
          cy="25.6002"
          r="13.6704"
          transform="rotate(65.9219 27.7559 25.6002)"
          fill="#8FD8E7"
        />
      </g>
      <path
        d="M55.1707 39.6377C55.0186 39.6377 54.8892 39.5844 54.7827 39.4779C54.6762 39.3714 54.6229 39.242 54.6229 39.0899V24.2308C54.6229 24.0634 54.6686 23.9264 54.7599 23.8199C54.8664 23.7134 55.0033 23.6601 55.1707 23.6601H65.2137C65.3811 23.6601 65.5181 23.7134 65.6246 23.8199C65.7311 23.9264 65.7844 24.0634 65.7844 24.2308V25.7372C65.7844 25.9046 65.7311 26.0415 65.6246 26.1481C65.5181 26.2394 65.3811 26.285 65.2137 26.285H57.7043V30.325H64.7116C64.879 30.325 65.0159 30.3783 65.1224 30.4848C65.229 30.5761 65.2822 30.7055 65.2822 30.8728V32.288C65.2822 32.4554 65.229 32.5923 65.1224 32.6989C65.0159 32.7902 64.879 32.8358 64.7116 32.8358H57.7043V37.0128H65.3963C65.5637 37.0128 65.7007 37.066 65.8072 37.1726C65.9137 37.2791 65.967 37.416 65.967 37.5834V39.0899C65.967 39.2572 65.9137 39.3942 65.8072 39.5007C65.7007 39.592 65.5637 39.6377 65.3963 39.6377H55.1707Z"
        fill="#1568CA"
      />
      <path
        d="M69.1184 39.6377C68.9663 39.6377 68.8369 39.5844 68.7304 39.4779C68.6239 39.3714 68.5706 39.242 68.5706 39.0899V23.9797C68.5706 23.8123 68.6239 23.683 68.7304 23.5917C68.8369 23.4851 68.9663 23.4319 69.1184 23.4319H71.0129C71.1803 23.4319 71.3096 23.4851 71.4009 23.5917C71.5075 23.683 71.5607 23.8123 71.5607 23.9797V39.0899C71.5607 39.242 71.5075 39.3714 71.4009 39.4779C71.3096 39.5844 71.1803 39.6377 71.0129 39.6377H69.1184Z"
        fill="#1568CA"
      />
      <path
        d="M79.7012 39.8659C78.0122 39.8659 76.6655 39.379 75.6612 38.4051C74.6721 37.416 74.1471 36.0313 74.0863 34.251L74.0634 33.6803L74.0863 33.1097C74.1623 31.375 74.6949 30.0131 75.684 29.024C76.6883 28.0349 78.0274 27.5404 79.7012 27.5404C81.4968 27.5404 82.8815 28.0882 83.8554 29.1838C84.8445 30.2794 85.339 31.7402 85.339 33.5662V34.0455C85.339 34.1977 85.2858 34.327 85.1792 34.4336C85.0727 34.5401 84.9358 34.5933 84.7684 34.5933H77.1905V34.7759C77.2209 35.6128 77.4492 36.3204 77.8752 36.8987C78.3165 37.4617 78.9176 37.7432 79.6784 37.7432C80.5762 37.7432 81.299 37.3932 81.8468 36.6932C81.9837 36.5259 82.0902 36.4193 82.1663 36.3737C82.2576 36.328 82.387 36.3052 82.5544 36.3052H84.5173C84.6543 36.3052 84.7684 36.3509 84.8597 36.4422C84.9662 36.5182 85.0195 36.6172 85.0195 36.7389C85.0195 37.1041 84.7988 37.5378 84.3575 38.0399C83.9315 38.5268 83.3152 38.9529 82.5087 39.3181C81.7022 39.6833 80.7664 39.8659 79.7012 39.8659ZM82.2348 32.676V32.6076C82.2348 31.7098 82.0066 30.987 81.5501 30.4392C81.1088 29.8914 80.4925 29.6175 79.7012 29.6175C78.91 29.6175 78.2937 29.8914 77.8524 30.4392C77.4111 30.987 77.1905 31.7098 77.1905 32.6076V32.676H82.2348Z"
        fill="#1568CA"
      />
      <path
        d="M88.3097 39.6377C88.1575 39.6377 88.0281 39.5844 87.9216 39.4779C87.8151 39.3714 87.7619 39.242 87.7619 39.0899V28.3164C87.7619 28.1643 87.8151 28.0349 87.9216 27.9284C88.0281 27.8219 88.1575 27.7686 88.3097 27.7686H90.09C90.2422 27.7686 90.3715 27.8219 90.478 27.9284C90.5846 28.0349 90.6378 28.1643 90.6378 28.3164V29.0925C91.4291 28.0578 92.5323 27.5404 93.9474 27.5404C95.6365 27.5404 96.8158 28.2175 97.4853 29.5718C97.8505 28.9632 98.3679 28.4762 99.0374 28.111C99.707 27.7306 100.43 27.5404 101.206 27.5404C102.454 27.5404 103.473 27.9665 104.264 28.8186C105.056 29.6707 105.451 30.9109 105.451 32.5391V39.0899C105.451 39.242 105.398 39.3714 105.291 39.4779C105.2 39.5844 105.071 39.6377 104.903 39.6377H103.032C102.88 39.6377 102.75 39.5844 102.644 39.4779C102.537 39.3714 102.484 39.242 102.484 39.0899V32.7217C102.484 31.763 102.279 31.0707 101.868 30.6446C101.472 30.2033 100.94 29.9827 100.27 29.9827C99.6765 29.9827 99.1668 30.2033 98.7407 30.6446C98.3298 31.0859 98.1244 31.7782 98.1244 32.7217V39.0899C98.1244 39.242 98.0712 39.3714 97.9646 39.4779C97.8581 39.5844 97.7288 39.6377 97.5766 39.6377H95.705C95.5528 39.6377 95.4235 39.5844 95.3169 39.4779C95.2104 39.3714 95.1572 39.242 95.1572 39.0899V32.7217C95.1572 31.763 94.9441 31.0707 94.5181 30.6446C94.1072 30.2033 93.5822 29.9827 92.9431 29.9827C92.3345 29.9827 91.8171 30.2033 91.391 30.6446C90.9802 31.0859 90.7748 31.7782 90.7748 32.7217V39.0899C90.7748 39.242 90.7215 39.3714 90.615 39.4779C90.5085 39.5844 90.3791 39.6377 90.227 39.6377H88.3097Z"
        fill="#1568CA"
      />
      <path
        d="M113.471 39.8659C111.782 39.8659 110.435 39.379 109.431 38.4051C108.442 37.416 107.917 36.0313 107.856 34.251L107.833 33.6803L107.856 33.1097C107.932 31.375 108.464 30.0131 109.453 29.024C110.458 28.0349 111.797 27.5404 113.471 27.5404C115.266 27.5404 116.651 28.0882 117.625 29.1838C118.614 30.2794 119.108 31.7402 119.108 33.5662V34.0455C119.108 34.1977 119.055 34.327 118.949 34.4336C118.842 34.5401 118.705 34.5933 118.538 34.5933H110.96V34.7759C110.99 35.6128 111.219 36.3204 111.645 36.8987C112.086 37.4617 112.687 37.7432 113.448 37.7432C114.346 37.7432 115.068 37.3932 115.616 36.6932C115.753 36.5259 115.86 36.4193 115.936 36.3737C116.027 36.328 116.156 36.3052 116.324 36.3052H118.287C118.424 36.3052 118.538 36.3509 118.629 36.4422C118.736 36.5182 118.789 36.6172 118.789 36.7389C118.789 37.1041 118.568 37.5378 118.127 38.0399C117.701 38.5268 117.085 38.9529 116.278 39.3181C115.472 39.6833 114.536 39.8659 113.471 39.8659ZM116.004 32.676V32.6076C116.004 31.7098 115.776 30.987 115.32 30.4392C114.878 29.8914 114.262 29.6175 113.471 29.6175C112.679 29.6175 112.063 29.8914 111.622 30.4392C111.181 30.987 110.96 31.7098 110.96 32.6076V32.676H116.004Z"
        fill="#1568CA"
      />
      <path
        d="M122.079 39.6377C121.927 39.6377 121.798 39.5844 121.691 39.4779C121.585 39.3714 121.531 39.242 121.531 39.0899V28.3164C121.531 28.1643 121.585 28.0349 121.691 27.9284C121.798 27.8219 121.927 27.7686 122.079 27.7686H123.951C124.103 27.7686 124.232 27.8219 124.339 27.9284C124.445 28.0349 124.499 28.1643 124.499 28.3164V29.2523C125.396 28.111 126.667 27.5404 128.31 27.5404C129.71 27.5404 130.821 28.0045 131.643 28.9327C132.465 29.8457 132.875 31.0935 132.875 32.676V39.0899C132.875 39.242 132.822 39.3714 132.716 39.4779C132.624 39.5844 132.495 39.6377 132.328 39.6377H130.319C130.167 39.6377 130.037 39.5844 129.931 39.4779C129.824 39.3714 129.771 39.242 129.771 39.0899V32.813C129.771 31.9152 129.551 31.2228 129.109 30.7359C128.683 30.2337 128.059 29.9827 127.238 29.9827C126.431 29.9827 125.792 30.2337 125.32 30.7359C124.864 31.238 124.636 31.9304 124.636 32.813V39.0899C124.636 39.242 124.582 39.3714 124.476 39.4779C124.384 39.5844 124.255 39.6377 124.088 39.6377H122.079Z"
        fill="#1568CA"
      />
      <path
        d="M141.005 39.6377C139.62 39.6377 138.578 39.2801 137.878 38.5649C137.193 37.8345 136.851 36.7693 136.851 35.3694V30.1881H135.048C134.895 30.1881 134.766 30.1348 134.659 30.0283C134.553 29.9066 134.5 29.7696 134.5 29.6175V28.3164C134.5 28.1643 134.553 28.0349 134.659 27.9284C134.766 27.8219 134.895 27.7686 135.048 27.7686H136.851V23.9797C136.851 23.8123 136.904 23.683 137.01 23.5917C137.117 23.4851 137.246 23.4319 137.398 23.4319H139.247C139.415 23.4319 139.544 23.4851 139.635 23.5917C139.742 23.683 139.795 23.8123 139.795 23.9797V27.7686H142.648C142.816 27.7686 142.945 27.8219 143.036 27.9284C143.143 28.0197 143.196 28.1491 143.196 28.3164V29.6175C143.196 29.7849 143.143 29.9218 143.036 30.0283C142.93 30.1348 142.8 30.1881 142.648 30.1881H139.795V35.1411C139.795 35.7954 139.909 36.29 140.137 36.6248C140.366 36.9595 140.746 37.1269 141.279 37.1269H142.854C143.006 37.1269 143.135 37.1802 143.242 37.2867C143.348 37.3932 143.401 37.5225 143.401 37.6747V39.0899C143.401 39.242 143.348 39.3714 143.242 39.4779C143.15 39.5844 143.021 39.6377 142.854 39.6377H141.005Z"
        fill="#1568CA"
      />
      <path
        d="M148.821 39.6489C148.668 39.6489 148.537 39.5953 148.43 39.4879C148.323 39.3806 148.269 39.2503 148.269 39.0969V30.1269H146.406C146.253 30.1269 146.122 30.0733 146.015 29.9659C145.908 29.8433 145.854 29.7053 145.854 29.5519V28.2409C145.854 28.0876 145.908 27.9573 146.015 27.8499C146.122 27.7426 146.253 27.6889 146.406 27.6889H148.269V26.7459C148.269 24.0013 149.772 22.6289 152.777 22.6289H157.469C157.638 22.6289 157.768 22.6826 157.86 22.7899C157.967 22.8819 158.021 23.0123 158.021 23.1809V24.4919C158.021 24.6606 157.967 24.7986 157.86 24.9059C157.753 25.0133 157.622 25.0669 157.469 25.0669H152.869C152.271 25.0669 151.849 25.2126 151.604 25.5039C151.374 25.7953 151.259 26.2476 151.259 26.8609V27.6889H157.469C157.638 27.6889 157.768 27.7426 157.86 27.8499C157.967 27.9419 158.021 28.0723 158.021 28.2409V39.0969C158.021 39.2503 157.967 39.3806 157.86 39.4879C157.768 39.5953 157.638 39.6489 157.469 39.6489H155.606C155.453 39.6489 155.322 39.5953 155.215 39.4879C155.108 39.3806 155.054 39.2503 155.054 39.0969V30.1269H151.259V39.0969C151.259 39.2503 151.205 39.3806 151.098 39.4879C150.991 39.5953 150.86 39.6489 150.707 39.6489H148.821Z"
        fill="#8FD8E7"
      />
    </svg>
  );
}
