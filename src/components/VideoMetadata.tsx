export default function (thisObj: {
  props: {
    src: string;
    fileName: string;
    fileSize: string;
  };
  state: {
    playing: boolean;
  };
}) {
  return (
    <div className="metadata">
      <div className="metadataContent">
        <div className="metadataName">{thisObj.props.fileName}</div>
        <div className="metadataSize">{thisObj.props.fileSize}</div>
      </div>
      <a
        className="metadataDownload"
        aria-label="Download"
        href={thisObj.props.src}
        rel="noreferrer noopener"
        target="_blank"
        role="button"
        tabIndex={0}>
        <svg
          className="metadataIcon"
          aria-hidden="true"
          role="img"
          width={24}
          height={24}
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"
          />
        </svg>
      </a>
    </div>
  );
}
