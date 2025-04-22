export const UpvoteIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill="#212529"
        d="M18.7 15.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L12 10.4l-5.3 5.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4Z"
      />
      <mask id="a" width="14" height="8" x="5" y="8" maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          d="M18.7 15.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L12 10.4l-5.3 5.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4Z"
        />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#212529"
          fillRule="evenodd"
          d="M0 0h24v24H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};
