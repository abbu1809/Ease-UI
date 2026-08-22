interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div
      className="overflow-x-auto rounded-2xl border shadow-sm"
      style={{
        background: 'var(--surface-color)',
        borderColor: 'var(--border-color)',
      }}
    >
      <table className="w-full min-w-[650px]">
        <thead className="">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">Prop</th>
            <th className="px-4 py-3 text-left text-sm font-semibold ">Type</th>
            <th className="px-4 py-3 text-left text-sm font-semibold ">
              Default
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold ">
              Description
            </th>
          </tr>
        </thead>
        <tbody
          className="divide-y"
          style={{ borderColor: 'var(--border-color)' }}
        >
          {data.map((row, i) => (
            <tr
              key={i}
              className="transition-colors hover:bg-[var(--surface-soft)]"
            >
              <td
                className="px-4 py-3 text-sm font-mono"
                style={{ color: 'var(--primary-color)' }}
              >
                {row.prop}
              </td>
              <td
                className="px-4 py-3 text-sm font-mono"
                style={{ color: 'var(--text-muted)' }}
              >
                {row.type}
              </td>
              <td
                className="px-4 py-3 text-sm font-mono"
                style={{ color: 'var(--text-faint)' }}
              >
                {row.default}
              </td>
              <td
                className="px-4 py-3 text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
