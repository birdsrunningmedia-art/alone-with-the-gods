import { TableBlockType } from "@/types/types";
export default function TableBlock({ content }: TableBlockType) {
  const { headers, rows } = content;

  return (
    <div className="w-full overflow-x-auto">
      <table>
        {/* HEADERS */}
        {headers && headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
        )}

        {/* BODY */}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.cells.map((cell, j) => (
                <td key={j}>{cell.content}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
