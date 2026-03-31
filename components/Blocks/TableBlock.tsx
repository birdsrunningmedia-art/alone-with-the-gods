import { TableBlockType } from "@/types/types";
export default function TableBlock({ content }: TableBlockType) {
  const { headers, rows } = content;

  return (
    <div className="w-fit overflow-x-auto p-1 border-2 border-border bg-white">
      <table className="font-mono border-separate border-spacing-4">
        {/* HEADERS */}
        {headers && headers.length > 0 && (
          <thead className=" font-bold text-[10px] text-left">
            <tr>
              {headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
        )}

        {/* BODY */}
        <tbody className="text-sm">
          {rows.map((row, i) => (
            <tr className="border-b border-border" key={i}>
              {row.cells.map((cell, j) => (
                <td className=" " key={j}>{cell.content}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
