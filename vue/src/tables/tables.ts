import {columns} from "@/tables/columnStructures";
import {customers} from "@/stores/static-data";

const tables = {
    dynamicTable1: (): any => generateDynamicTable1(''),
}

function generateDynamicTable1(url: string) {
    const tableColumns = generateTableData('dynamicTable1');
    const customData = {
        api: { url: url },
        columns: generateColumns(tableColumns),
    }
}

const generateTableData = (tableName: string): any => {
    return normalizeDBDataForTable(customers, columns, columns);
}

const normalizeDBDataForTable = (itemColumns: any, typeColumns: any, columns: any) => {
    const data = [];
    for (const item of itemColumns) {
        if (item.name in columns) {
            data.push({ ...columns[item.name], ...item });
        }
    }
    return data;
}

const generateColumns = (customColumns: any) => {
    return generateColumnsDefault(customColumns);
}

const generateColumnsDefault = (columns: any) => {
    return columns;
}

export { tables }