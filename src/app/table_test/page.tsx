import { ReusableTable } from "@/components/table"

export default function TablePage() {
    return (
        <div>
            <ReusableTable columns={columns} data={data} />
        </div>
    )
}