import { columns } from "@/tables/columnStructures";
const dynamicTable = [
    columns.name,
    columns.country,
    columns.agent,
    columns.status,
]

const testTable = [
    { field: 'id', header: 'ID' },
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
]
export { dynamicTable, testTable }