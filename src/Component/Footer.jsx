import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-one">
          <h4>BE THE FIRST TO KNOW</h4>
          <h5>Sign up for updates from mettā muse</h5>
          <input type="text" placeholder="enter your email" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="footer-two">
          <h4>CONTACT US</h4>
          <span>+44 221 133 5360</span>
          <h5>customercare@mettamuse.com</h5>
          <h4>CURRENCY</h4>
          <span>
            <svg
              width="65"
              height="20"
              viewBox="0 0 72 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_42875_123)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0H45.6005V1.84617H0V0ZM0 3.69234H45.6005V5.53852H0V3.69234ZM0 7.38469H45.6005V9.23086H0V7.38469ZM0 11.077H45.6005V12.9232H0V11.077ZM0 14.7694H45.6005V16.6155H0V14.7694ZM0 18.4617H45.6005V20.3079H0V18.4617ZM0 22.1541H45.6005V24.0002H0V22.1541Z"
                  fill="#BD3D44"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 1.8457H45.6005V3.69187H0V1.8457ZM0 5.53805H45.6005V7.38422H0V5.53805ZM0 9.23039H45.6005V11.0766H0V9.23039ZM0 12.9227H45.6005V14.7689H0V12.9227ZM0 16.6151H45.6005V18.4613H0V16.6151ZM0 20.3074H45.6005V22.1536H0V20.3074Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0H18.2402V12.9232H0V0Z"
                  fill="#192F5D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.51319 0.553711L1.69778 1.0706H2.21472L1.79008 1.38448L1.95625 1.88295L1.51319 1.56907L1.10702 1.88295L1.27319 1.38448L0.830078 1.0706H1.384L1.51319 0.553711ZM4.55936 0.553711L4.72553 1.0706H5.26089L4.81783 1.38448L5.00242 1.88295L4.55936 1.56907L4.1163 1.88295L4.30089 1.38448L3.85783 1.0706H4.39319L4.55936 0.553711ZM7.60553 0.553711L7.7717 1.0706H8.30706L7.864 1.38448L8.04864 1.88295L7.60553 1.56907L7.16247 1.88295L7.34706 1.38448L6.904 1.0706H7.43941L7.60553 0.553711ZM10.6333 0.553711L10.8179 1.0706H11.3348L10.9102 1.38448L11.0763 1.88295L10.6333 1.56907L10.2086 1.88295L10.3748 1.38448L9.9317 1.0706H10.4856L10.6333 0.553711ZM13.6795 0.553711L13.8456 1.0706H14.381L13.9379 1.38448L14.1225 1.88295L13.661 1.56907L13.2363 1.88295L13.4025 1.38448L12.9595 1.0706H13.4948L13.6795 0.553711ZM16.7256 0.553711L16.8918 1.0706H17.4272L16.9841 1.38448L17.1687 1.88295L16.7256 1.56907L16.2826 1.88295L16.4672 1.38448L16.0241 1.0706H16.5595L16.7256 0.553711ZM3.04548 1.84601L3.21166 2.36295H3.74706L3.30395 2.67677L3.48859 3.17524L3.04548 2.86141L2.60242 3.17524L2.78702 2.67677L2.34395 2.36295H2.87936L3.04548 1.84601ZM6.07323 1.84601L6.25783 2.36295H6.77477L6.35012 2.67677L6.5163 3.17524L6.07323 2.86141L5.64859 3.17524L5.81477 2.67677L5.37166 2.36295H5.92553L6.07323 1.84601ZM9.11941 1.84601L9.28558 2.36295H9.82094L9.37787 2.67677L9.56247 3.17524L9.11941 2.86141L8.6763 3.17524L8.86094 2.67677L8.41787 2.36295H8.95323L9.11941 1.84601ZM12.1656 1.84601L12.3318 2.36295H12.8671L12.424 2.67677L12.6087 3.17524L12.1656 2.86141L11.7225 3.17524L11.9071 2.67677L11.464 2.36295H11.9995L12.1656 1.84601ZM15.1933 1.84601L15.3779 2.36295H15.8764L15.4518 2.67677L15.6179 3.17524L15.1749 2.86141L14.7502 3.17524L14.9164 2.67677L14.4733 2.36295H15.0272L15.1933 1.84601ZM1.53161 3.13835L1.67931 3.65524H2.23319L1.79008 3.96912L1.95625 4.46759L1.51319 4.15371L1.10702 4.46759L1.27319 3.96912L0.830078 3.65524H1.384L1.53161 3.13835ZM4.55936 3.13835L4.72553 3.65524H5.26089L4.8363 3.96912L5.00242 4.46759L4.55936 4.15371L4.13472 4.46759L4.30089 3.96912L3.85783 3.65524H4.39319L4.55936 3.13835ZM7.60553 3.13835L7.7717 3.65524H8.30706L7.864 3.96912L8.04864 4.46759L7.60553 4.15371L7.16247 4.46759L7.34706 3.96912L6.904 3.65524H7.43941L7.60553 3.13835ZM10.6333 3.13835L10.8179 3.65524H11.3348L10.9102 3.96912L11.0763 4.46759L10.6333 4.15371L10.2086 4.46759L10.3748 3.96912L9.9317 3.65524H10.4856L10.6333 3.13835ZM13.6795 3.13835L13.8456 3.65524H14.381L13.9564 3.96912L14.1225 4.46759L13.6795 4.15371L13.2548 4.46759L13.421 3.96912L12.9779 3.65524H13.5133L13.6795 3.13835ZM16.7256 3.13835L16.8918 3.65524H17.4272L16.9841 3.96912L17.1687 4.46759L16.7256 4.15371L16.2826 4.46759L16.4672 3.96912L16.0241 3.65524H16.5595L16.7256 3.13835ZM3.04548 4.4306L3.21166 4.94754H3.74706L3.30395 5.26137L3.48859 5.75984L3.04548 5.44601L2.60242 5.75984L2.78702 5.26137L2.34395 4.94754H2.87936L3.04548 4.4306ZM6.07323 4.4306L6.25783 4.94754H6.77477L6.35012 5.26137L6.5163 5.75984L6.07323 5.44601L5.64859 5.75984L5.81477 5.26137L5.37166 4.94754H5.92553L6.07323 4.4306ZM9.11941 4.4306L9.28558 4.94754H9.82094L9.39634 5.26137L9.56247 5.75984L9.11941 5.44601L8.69477 5.75984L8.86094 5.26137L8.41787 4.94754H8.95323L9.11941 4.4306ZM12.1656 4.4306L12.3318 4.94754H12.8671L12.424 5.26137L12.6087 5.75988L12.1656 5.44605L11.7225 5.75988L11.9071 5.26141L11.464 4.94759H11.9995L12.1656 4.4306ZM15.1933 4.4306L15.3779 4.94754H15.8764L15.4518 5.26137L15.6179 5.75984L15.1749 5.44601L14.7502 5.75984L14.9164 5.26137L14.4733 4.94754H15.0272L15.1933 4.4306ZM1.53161 5.72295L1.67931 6.23984H2.23319L1.79008 6.55371L1.95625 7.05218L1.51319 6.73831L1.10702 7.05218L1.27319 6.55371L0.830078 6.23984H1.384L1.53161 5.72295ZM4.55936 5.72295L4.72553 6.23984H5.26089L4.8363 6.55371L5.00242 7.05218L4.55936 6.73831L4.13472 7.05218L4.30089 6.55371L3.85783 6.23984H4.39319L4.55936 5.72295ZM7.60553 5.72295L7.7717 6.23984H8.30706L7.864 6.55371L8.04864 7.05218L7.60553 6.73831L7.16247 7.05218L7.34706 6.55371L6.904 6.23984H7.43941L7.60553 5.72295ZM10.6333 5.72295L10.8179 6.23984H11.3348L10.9102 6.55371L11.0763 7.05218L10.6333 6.73831L10.2086 7.05218L10.3748 6.55371L9.9317 6.23984H10.4856L10.6333 5.72295ZM13.6795 5.72295L13.8456 6.23984H14.381L13.9564 6.55371L14.1225 7.05218L13.6795 6.73831L13.2548 7.05218L13.421 6.55371L12.9779 6.23984H13.5133L13.6795 5.72295ZM16.7256 5.72295L16.8918 6.23984H17.4272L16.9841 6.55371L17.1687 7.05218L16.7256 6.73831L16.2826 7.05218L16.4672 6.55371L16.0241 6.23984H16.5595L16.7256 5.72295ZM3.04548 7.01524L3.21166 7.53218H3.74706L3.30395 7.84601L3.48859 8.34448L3.04548 8.03065L2.60242 8.34448L2.78702 7.84601L2.34395 7.53218H2.87936L3.04548 7.01524ZM6.07323 7.01524L6.25783 7.53218H6.77477L6.35012 7.84601L6.5163 8.34448L6.07323 8.03065L5.64859 8.34448L5.81477 7.84601L5.37166 7.53218H5.92553L6.07323 7.01524ZM9.11941 7.01524L9.28558 7.53218H9.82094L9.39634 7.84601L9.56247 8.34448L9.11941 8.03065L8.69477 8.34448L8.86094 7.84601L8.41787 7.53218H8.95323L9.11941 7.01524ZM12.1656 7.01524L12.3318 7.53218H12.8671L12.424 7.84601L12.6087 8.34452L12.1656 8.0307L11.7225 8.34452L11.9071 7.84606L11.464 7.53223H11.9995L12.1656 7.01524ZM15.1933 7.01524L15.3779 7.53218H15.8764L15.4518 7.84601L15.6179 8.34448L15.1749 8.03065L14.7502 8.34448L14.9164 7.84601L14.4733 7.53218H15.0272L15.1933 7.01524ZM1.53161 8.30759L1.67931 8.82448H2.23319L1.79008 9.13835L1.95625 9.63682L1.51319 9.32295L1.10702 9.63682L1.27319 9.13835L0.830078 8.82448H1.384L1.53161 8.30759ZM4.55936 8.30759L4.72553 8.82448H5.26089L4.8363 9.13835L5.00242 9.63682L4.55936 9.32295L4.13472 9.63682L4.30089 9.13835L3.85783 8.82448H4.39319L4.55936 8.30759ZM7.60553 8.30759L7.7717 8.82448H8.30706L7.864 9.13835L8.04864 9.63682L7.60553 9.32295L7.16247 9.63682L7.34706 9.13835L6.904 8.82448H7.43941L7.60553 8.30759ZM10.6333 8.30759L10.8179 8.82448H11.3348L10.9102 9.13835L11.0763 9.63682L10.6333 9.32295L10.2086 9.63682L10.3748 9.13835L9.9317 8.82448H10.4856L10.6333 8.30759ZM13.6795 8.30759L13.8456 8.82448H14.381L13.9564 9.13835L14.1225 9.63682L13.6795 9.32295L13.2548 9.63682L13.421 9.13835L12.9779 8.82448H13.5133L13.6795 8.30759ZM16.7256 8.30759L16.8918 8.82448H17.4272L16.9841 9.13835L17.1687 9.63682L16.7256 9.32295L16.2826 9.63682L16.4672 9.13835L16.0241 8.82448H16.5595L16.7256 8.30759ZM3.04548 9.59993L3.21166 10.1169H3.74706L3.30395 10.4307L3.48859 10.9292L3.04548 10.6153L2.60242 10.9292L2.78702 10.4307L2.34395 10.1169H2.87936L3.04548 9.59993ZM6.07323 9.59993L6.25783 10.1169H6.77477L6.35012 10.4307L6.5163 10.9292L6.07323 10.6153L5.64859 10.9292L5.81477 10.4307L5.37166 10.1169H5.92553L6.07323 9.59993ZM9.11941 9.59993L9.28558 10.1169H9.82094L9.39634 10.4307L9.56247 10.9292L9.11941 10.6153L8.69477 10.9292L8.86094 10.4307L8.41787 10.1169H8.95323L9.11941 9.59993ZM12.1656 9.59993L12.3318 10.1169H12.8671L12.424 10.4307L12.6087 10.9292L12.1656 10.6154L11.7225 10.9292L11.9071 10.4307L11.464 10.1169H11.9995L12.1656 9.59993ZM15.1933 9.59993L15.3779 10.1169H15.8764L15.4518 10.4307L15.6179 10.9292L15.1749 10.6153L14.7502 10.9292L14.9164 10.4307L14.4733 10.1169H15.0272L15.1933 9.59993ZM1.53161 10.8923L1.67931 11.4092H2.23319L1.79008 11.723L1.95625 12.2215L1.51319 11.9076L1.10702 12.2215L1.27319 11.723L0.830078 11.4092H1.384L1.53161 10.8923ZM4.55936 10.8923L4.72553 11.4092H5.26089L4.8363 11.723L5.00242 12.2215L4.55936 11.9076L4.13472 12.2215L4.30089 11.723L3.85783 11.4092H4.39319L4.55936 10.8923ZM7.60553 10.8923L7.7717 11.4092H8.30706L7.864 11.723L8.04864 12.2215L7.60553 11.9076L7.16247 12.2215L7.34706 11.723L6.904 11.4092H7.43941L7.60553 10.8923ZM10.6333 10.8923L10.8179 11.4092H11.3348L10.9102 11.723L11.0763 12.2215L10.6333 11.9076L10.2086 12.2215L10.3748 11.723L9.9317 11.4092H10.4856L10.6333 10.8923ZM13.6795 10.8923L13.8456 11.4092H14.381L13.9564 11.723L14.1225 12.2215L13.6795 11.9076L13.2548 12.2215L13.421 11.723L12.9779 11.4092H13.5133L13.6795 10.8923ZM16.7256 10.8923L16.8918 11.4092H17.4272L16.9841 11.723L17.1687 12.2215L16.7256 11.9076L16.2826 12.2215L16.4672 11.723L16.0241 11.4092H16.5595L16.7256 10.8923Z"
                  fill="white"
                />
              </g>
              <path
                d="M32 9L33.4849 10.5151L35 12L33.4849 13.4849L32 15L30.5151 13.4849L29 12L30.5151 10.5151L32 9Z"
                fill="white"
              />
              <path
                d="M47.2 5.3H49.344V12.516C49.344 14.996 47.808 16.66 45.12 16.66C42.432 16.66 40.896 14.996 40.896 12.516V5.3H43.04V12.516C43.04 13.812 43.952 14.532 45.12 14.532C46.288 14.532 47.2 13.812 47.2 12.516V5.3ZM55.7144 16.66C53.2664 16.66 51.6824 15.188 51.5704 12.964H53.7784C53.9064 13.908 54.6424 14.532 55.7144 14.532C56.6584 14.532 57.3144 14.18 57.3144 13.412C57.3144 12.788 56.9464 12.436 56.1624 12.228L54.2744 11.716C52.5624 11.252 51.7144 10.052 51.7144 8.404C51.7144 6.164 53.4744 5.14 55.4264 5.14C57.6664 5.14 59.0584 6.452 59.2984 8.356H57.0904C56.8984 7.604 56.1144 7.268 55.3944 7.268C54.4984 7.268 53.8584 7.62 53.8584 8.404C53.8584 9.06 54.3704 9.348 54.9784 9.508L56.8024 10.004C58.5304 10.468 59.4584 11.524 59.4584 13.412C59.4584 15.428 58.1464 16.66 55.7144 16.66ZM66.1546 16.5H61.9306V5.3H66.1546C68.8426 5.3 70.3786 6.964 70.3786 9.444V12.356C70.3786 14.836 68.8426 16.5 66.1546 16.5ZM68.2346 12.356V9.444C68.2346 8.148 67.3226 7.428 66.1546 7.428H64.0746V14.372H66.1546C67.3226 14.372 68.2346 13.652 68.2346 12.356Z"
                fill="white"
              />
              <defs>
                <clipPath id="clip0_42875_123">
                  <rect width="24" height="24" rx="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h6>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </h6>
        </div>
      </div>
      <div className="footer-main-two">
        <div className="footer-third">
          <h4>mettā muse</h4>
          <div className="footer-third-links">
            <span>About us</span>
            <span>Stories</span>
            <span>Artisans</span>
            <span>Boutique</span>
            <span>Contact us</span>
            <span>EU Compliances Docs</span>
          </div>
        </div>
        <div className="footer-fourth">
          <h4>QUICK LINKS</h4>
          <div className="footer-fourth-links">
            <span>Ordering & Shipping</span>
            <span>Join/Login as a Seller</span>
            <span>Payment & Pricing</span>
            <span>Return & Refund</span>
            <span>FAQS</span>
            <span>Privacy & Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
        <div className="footer-fifth">
          <h4>FOLLOW US</h4>
          <div className="social-media-logo">
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_42875_79)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.702 8.048C11.8505 8.08686 11.2688 8.22171 10.7591 8.42057C10.2334 8.624 9.78767 8.89829 9.34196 9.34286C8.89853 9.78743 8.62424 10.2343 8.42082 10.76C8.22196 11.2686 8.0871 11.8503 8.04824 12.7017C8.00939 13.5543 8.00024 13.8274 8.00024 16C8.00024 18.1726 8.00939 18.4457 8.04824 19.2983C8.0871 20.1497 8.22196 20.7314 8.42082 21.2411C8.62424 21.7669 8.89853 22.2126 9.3431 22.6583C9.78767 23.1017 10.2345 23.376 10.7602 23.5806C11.2688 23.7783 11.8505 23.912 12.702 23.952C13.5557 23.9909 13.8277 24 16.0002 24C18.1728 24 18.446 23.9909 19.2985 23.952C20.15 23.9131 20.7317 23.7783 21.2414 23.5806C21.7671 23.3749 22.2128 23.1017 22.6585 22.6571C23.102 22.2126 23.3762 21.7657 23.5808 21.24C23.7785 20.7314 23.9122 20.1497 23.9522 19.2983C23.9911 18.4446 24.0002 18.1726 24.0002 16C24.0002 13.8274 23.9911 13.5543 23.9522 12.7017C23.9134 11.8503 23.7785 11.2686 23.5808 10.7589C23.3797 10.2249 23.0646 9.74131 22.6574 9.34171C22.2128 8.89829 21.766 8.624 21.2402 8.42057C20.7317 8.22171 20.15 8.08686 19.2985 8.048C18.446 8.00914 18.1728 8 16.0002 8C13.8277 8 13.5545 8.00914 12.702 8.048ZM11.8917 16C11.8917 17.0897 12.3245 18.1347 13.095 18.9052C13.8656 19.6757 14.9106 20.1086 16.0002 20.1086C17.0899 20.1086 18.1349 19.6757 18.9054 18.9052C19.676 18.1347 20.1088 17.0897 20.1088 16C20.1088 14.9103 19.676 13.8653 18.9054 13.0948C18.1349 12.3243 17.0899 11.8914 16.0002 11.8914C14.9106 11.8914 13.8656 12.3243 13.095 13.0948C12.3245 13.8653 11.8917 14.9103 11.8917 16ZM16.0002 18.6663C15.2931 18.6663 14.6149 18.3854 14.1149 17.8853C13.6149 17.3853 13.334 16.7071 13.334 16C13.334 15.2929 13.6149 14.6147 14.1149 14.1147C14.6149 13.6146 15.2931 13.3337 16.0002 13.3337C16.7074 13.3337 17.3856 13.6146 17.8856 14.1147C18.3856 14.6147 18.6665 15.2929 18.6665 16C18.6665 16.7071 18.3856 17.3853 17.8856 17.8853C17.3856 18.3854 16.7074 18.6663 16.0002 18.6663ZM21.6002 11.44C21.6002 11.5661 21.5754 11.6909 21.5272 11.8074C21.4789 11.9238 21.4082 12.0297 21.3191 12.1188C21.2299 12.208 21.1241 12.2787 21.0076 12.3269C20.8911 12.3752 20.7663 12.4 20.6402 12.4C20.5142 12.4 20.3893 12.3752 20.2729 12.3269C20.1564 12.2787 20.0506 12.208 19.9614 12.1188C19.8723 12.0297 19.8016 11.9238 19.7533 11.8074C19.7051 11.6909 19.6802 11.5661 19.6802 11.44C19.6802 11.1854 19.7814 10.9412 19.9614 10.7612C20.1415 10.5811 20.3856 10.48 20.6402 10.48C20.8949 10.48 21.139 10.5811 21.3191 10.7612C21.4991 10.9412 21.6002 11.1854 21.6002 11.44Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_42875_79">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className="payment-logo">
            <span>
              <svg
                width="56"
                height="25"
                viewBox="0 0 56 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="34"
                  rx="4.5"
                  fill="white"
                  stroke="#FFF2F5"
                />
                <path
                  d="M26.6248 17.6346V22.2179H25.1667V10.9028H29.021C29.4829 10.895 29.9417 10.9786 30.3711 11.1487C30.8005 11.3188 31.1921 11.5721 31.5233 11.894C31.837 12.1867 32.0899 12.5385 32.2677 12.929C32.4454 13.3196 32.5444 13.7413 32.559 14.1702C32.5736 14.599 32.5036 15.0266 32.3529 15.4283C32.2022 15.8301 31.9738 16.1982 31.6808 16.5117L31.5233 16.6778C30.8501 17.3181 29.9506 17.6661 29.021 17.6432L26.6248 17.6346ZM26.6248 12.2893V16.2825H29.0569C29.5968 16.2997 30.1182 16.0892 30.4963 15.7039C30.7668 15.422 30.9484 15.0667 31.0186 14.6824C31.0887 14.2981 31.0444 13.9016 30.891 13.5423C30.7376 13.183 30.4819 12.8767 30.1558 12.6616C29.8297 12.4464 29.4475 12.3319 29.0569 12.3323L26.6248 12.2893ZM35.9118 14.22C36.8428 14.1771 37.7537 14.4893 38.4584 15.098C39.0958 15.7139 39.4352 16.5733 39.3894 17.4599V22.2351H38.0015V21.138H37.9313C37.6824 21.5495 37.3305 21.8889 36.9102 22.1228C36.49 22.3566 36.016 22.4768 35.5351 22.4714C34.7501 22.4969 33.9845 22.2241 33.3924 21.708C33.1119 21.4792 32.887 21.1895 32.7349 20.861C32.5828 20.5325 32.5074 20.1736 32.5144 19.8117C32.4979 19.4459 32.5689 19.0814 32.7216 18.7486C32.8743 18.4157 33.1043 18.1242 33.3924 17.8981C34.0991 17.3899 34.9545 17.1305 35.8244 17.1605C36.5649 17.1319 37.2997 17.2937 37.9585 17.6346V17.3367C37.9634 17.0904 37.9121 16.8462 37.8086 16.6226C37.7052 16.399 37.5522 16.2019 37.3613 16.0462C36.9779 15.6977 36.4757 15.5091 35.9576 15.5191C35.5814 15.5156 35.2105 15.608 34.8799 15.7877C34.5494 15.9674 34.2701 16.2284 34.0684 16.5461L32.7865 15.7382C33.1346 15.2395 33.6045 14.8382 34.1516 14.5724C34.6986 14.3067 35.3046 14.1854 35.9118 14.22ZM34.0684 19.8461C34.065 20.0316 34.1072 20.2151 34.1914 20.3804C34.2756 20.5458 34.3991 20.6879 34.5511 20.7942C34.8705 21.0463 35.2673 21.1795 35.6755 21.1709C36.2899 21.1695 36.8786 20.9274 37.3169 20.4949C37.7537 20.0852 38.0015 19.5138 38.0015 18.9151C37.4501 18.5231 36.7801 18.3338 36.1052 18.3794C35.5811 18.3587 35.0641 18.5063 34.6299 18.8005C34.4579 18.9155 34.3168 19.071 34.2189 19.2533C34.121 19.4356 34.0694 19.6391 34.0684 19.8461ZM47.3687 14.475L42.5132 25.6325H41.0122L42.847 21.7252L39.6615 14.475H41.2414L43.5502 20.0394L45.7975 14.475H47.3687Z"
                  fill="#5F6368"
                />
                <path
                  d="M20.742 16.6458C20.742 16.2047 20.7076 15.7635 20.6375 15.3281H14.4929V17.8303H18.0035C17.932 18.228 17.781 18.6071 17.5595 18.9451C17.338 19.283 17.0505 19.5727 16.7144 19.7969V21.4211H18.8113C19.4489 20.8042 19.9501 20.0605 20.2826 19.238C20.6152 18.4155 20.7717 17.5325 20.742 16.6458Z"
                  fill="#4285F4"
                />
                <path
                  d="M14.5016 22.9989C16.0862 23.0424 17.6278 22.4806 18.8128 21.4277L16.7131 19.7949C16.2086 20.1184 15.6369 20.3226 15.0416 20.3919C14.4464 20.4612 13.8431 20.3939 13.2777 20.1951C12.7124 19.9962 12.1998 19.6711 11.779 19.2443C11.3582 18.8176 11.0402 18.3005 10.8493 17.7324H8.698V19.4082C9.23632 20.4868 10.0645 21.394 11.0896 22.0283C12.1147 22.6625 13.2962 22.9986 14.5016 22.9989Z"
                  fill="#34A853"
                />
                <path
                  d="M10.849 17.7438C10.5765 16.9379 10.5765 16.0647 10.849 15.2588V13.583H8.69765C8.23901 14.4874 8 15.4872 8 16.5013C8 17.5154 8.23901 18.5152 8.69765 19.4196L10.849 17.7438Z"
                  fill="#FBBC04"
                />
                <path
                  d="M14.5016 12.5733C15.4283 12.5564 16.3242 12.9065 16.9938 13.5473L18.8558 11.6953C17.6686 10.581 16.0938 9.9732 14.4658 10.0009C13.2675 10.0069 12.0943 10.3447 11.0762 10.9767C10.0581 11.6087 9.23498 12.5104 8.698 13.5816L10.8493 15.2588C11.1008 14.4855 11.5885 13.8105 12.2436 13.3288C12.8988 12.8471 13.6885 12.5828 14.5016 12.5733Z"
                  fill="#EA4335"
                />
              </svg>
            </span>
            <span>
              <svg
                width="56"
                height="25"
                viewBox="0 0 56 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="34"
                  rx="4.5"
                  fill="#006FCF"
                  stroke="#FFF2F5"
                />
                <path
                  d="M14.1199 15.2484L15.2285 17.9354H13.0199L14.1199 15.2484ZM37.144 15.3601H32.8801V16.5447H37.0753V18.3193H32.8887V19.6398H37.1526V20.6983L40.1275 17.4828L37.1526 14.1312L37.144 15.3601ZM17.0017 12.0086H22.7237L23.9941 14.7801L25.1715 12H40.0243L41.5684 13.7044L43.1654 12H49.9874L44.9471 17.5172L49.9358 23H43.0121L41.4681 21.2955L39.8568 23H15.6367L14.9292 21.2955H13.3107L12.6017 23H7L11.7065 12H16.6193L17.0017 12.0086ZM29.4096 13.5526H26.2027L24.0543 18.6172L21.7268 13.5526H18.5443V20.4419L15.5938 13.5526H12.7392L9.32747 21.4474H11.5547L12.2622 19.7429H15.9805L16.688 21.4474H20.5839V15.8113L23.0918 21.456H24.7962L27.2884 15.8285V21.4574H29.3767L29.4111 13.5512L29.4096 13.5526ZM42.7872 17.5172L46.4124 13.5526H43.8027L41.5096 16.0247L39.2924 13.5526H30.8505V21.456H39.1721L41.4839 18.9666L43.701 21.456H46.3866L42.7872 17.5172Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="56"
                height="25"
                viewBox="0 0 56 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="34"
                  rx="4.5"
                  fill="white"
                  stroke="#FFF2F5"
                />
                <path
                  d="M15.307 11.1151C15.7624 10.5458 16.0713 9.78115 15.9899 9C15.3235 9.03309 14.5106 9.43956 14.0396 10.0095C13.6169 10.4974 13.2428 11.2938 13.3402 12.0422C14.0882 12.1071 14.8356 11.6685 15.307 11.1151Z"
                  fill="black"
                />
                <path
                  d="M15.9815 12.1887C14.8948 12.1238 13.9715 12.805 13.4528 12.805C12.9338 12.805 12.1393 12.2211 11.28 12.237C10.1618 12.2532 9.12436 12.8858 8.55666 13.8915C7.38947 15.9027 8.24848 18.8872 9.38388 20.5254C9.93503 21.3364 10.5994 22.2285 11.4746 22.1964C12.3019 22.1639 12.6259 21.6611 13.6309 21.6611C14.6356 21.6611 14.9275 22.1964 15.8031 22.1802C16.7108 22.1639 17.2785 21.3692 17.8296 20.5582C18.4622 19.6336 18.7207 18.7415 18.737 18.6929C18.7207 18.6767 16.9865 18.0113 16.9703 16.0163C16.9541 14.3456 18.3321 13.5508 18.397 13.5018C17.6188 12.3509 16.4029 12.2211 15.9812 12.1887"
                  fill="black"
                />
                <path
                  d="M26.8119 9.92993C29.1729 9.92993 30.8173 11.5574 30.8173 13.9268C30.8173 16.3047 29.1392 17.9406 26.7529 17.9406H24.1389V22.0981H22.2502V9.92993H26.8119ZM24.1389 16.3553H26.3059C27.9506 16.3553 28.8862 15.47 28.8862 13.9353C28.8862 12.4009 27.9503 11.5237 26.3143 11.5237H24.1389V16.3553Z"
                  fill="black"
                />
                <path
                  d="M31.2863 19.5761C31.2863 18.0161 32.4752 17.1224 34.6675 16.9874L37.02 16.844V16.1693C37.02 15.1831 36.3709 14.6433 35.2157 14.6433C34.2626 14.6433 33.571 15.1322 33.4283 15.8825H31.7245C31.7754 14.3059 33.2593 13.1592 35.2663 13.1592C37.4249 13.1592 38.8331 14.2891 38.8331 16.0431V22.0973H37.0878V20.6385H37.0456C36.548 21.5913 35.4515 22.1898 34.2626 22.1898C32.5089 22.1898 31.2863 21.1446 31.2863 19.5761ZM37.02 18.792V18.1089L34.9205 18.2438C33.7397 18.3197 33.1246 18.758 33.1246 19.5252C33.1246 20.2674 33.7653 20.7482 34.7687 20.7482C36.0501 20.7482 37.02 19.93 37.02 18.792Z"
                  fill="black"
                />
                <path
                  d="M40.4376 25.352V23.8935C40.5557 23.91 40.8421 23.9269 40.9939 23.9269C41.8286 23.9269 42.301 23.5733 42.5877 22.6621L42.7564 22.1226L39.5604 13.2688H41.5334L43.7598 20.4529H43.8019L46.028 13.2688H47.9507L44.6366 22.5693C43.8775 24.7029 43.0091 25.4029 41.1711 25.4029C41.0277 25.4029 40.5638 25.3861 40.4376 25.352Z"
                  fill="black"
                />
              </svg>
            </span>
            <span>
              <svg
                width="56"
                height="25"
                viewBox="0 0 56 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="34"
                  rx="4.5"
                  fill="white"
                  stroke="#FFF2F5"
                />
                <path
                  d="M22.026 27.052C27.5633 27.052 32.0521 22.5632 32.0521 17.026C32.0521 11.4888 27.5633 7 22.026 7C16.4888 7 12 11.4888 12 17.026C12 22.5632 16.4888 27.052 22.026 27.052Z"
                  fill="#EB001B"
                />
                <path
                  d="M33.4845 27.052C39.0218 27.052 43.5106 22.5632 43.5106 17.026C43.5106 11.4888 39.0218 7 33.4845 7C27.9473 7 23.4585 11.4888 23.4585 17.026C23.4585 22.5632 27.9473 27.052 33.4845 27.052Z"
                  fill="#F79E1B"
                />
                <path
                  d="M32.0522 17.0244C32.0522 13.5869 30.3335 10.5791 27.7554 8.86035C25.1772 10.7223 23.4585 13.7301 23.4585 17.0244C23.4585 20.3187 25.1772 23.4697 27.7554 25.1884C30.3335 23.4697 32.0522 20.4619 32.0522 17.0244Z"
                  fill="#FF5F00"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;