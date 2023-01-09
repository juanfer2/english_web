import { FileItemStyled } from './FileItem.styles';
import { IoDocumentText } from 'react-icons/io5';

export interface Props {
  title: string;
  date: string;
  size: string;
}

function FileItem({ title, date, size }: Props) {
  return (
    <FileItemStyled>
      <div className="title">
        <IoDocumentText size={25} />
        {title}
      </div>

      <div className="date">{date}</div>
      <div className="size">{size}</div>
    </FileItemStyled>
  );
}

export default FileItem;
