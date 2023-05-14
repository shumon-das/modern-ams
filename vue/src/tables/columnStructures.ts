const defaultFrozen: {frozen: boolean; hidden: boolean} = {
    frozen: false,
    hidden: false
}
const columns = {
    name: {
        ...defaultFrozen,
        id: "name",
        field: "name",
        header: "Name",
        class: "",
    },
    country: {
        ...defaultFrozen,
        id: "country",
        field: "country.name",
        header: "Country",
        class: "",
    },
    agent: {
        id: "agent",
        field: "agent.name",
        header: "Agent",
        class: "",
    },
    status: {
        id: "status",
        field: "status",
        header: "Status",
        class: "",
    },
}
export {columns};