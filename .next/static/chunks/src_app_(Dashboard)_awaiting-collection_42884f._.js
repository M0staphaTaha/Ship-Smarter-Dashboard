(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_(Dashboard)_awaiting-collection_42884f._.js", {

"[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/Data.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Data": ()=>Data
});
const Data = [
    {
        trackID: "MNJOF3867",
        customerPhone: "50 MAD",
        orderID: "1234567891",
        cityFrom: "Marrakech",
        cityTo: "Casablanca"
    },
    {
        trackID: "MNJOF3867",
        customerPhone: "50 MAD",
        orderID: "1234567891",
        cityFrom: "Marrakech",
        cityTo: "Casablanca"
    },
    {
        trackID: "MNJOF3867",
        customerPhone: "50 MAD",
        orderID: "1234567891",
        cityFrom: "Marrakech",
        cityTo: "Casablanca"
    },
    {
        trackID: "MNJOF3867",
        customerPhone: "50 MAD",
        orderID: "1234567891",
        cityFrom: "Marrakech",
        cityTo: "Casablanca"
    }
];

})()),
"[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mantine$2d$react$2d$table$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/mantine-react-table/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/index.mjs [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Flex/Flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Table/Table.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Dashboard$292f$awaiting$2d$collection$2f$components$2f$AwaitingCollectionTable$2f$Data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/Data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__IconEdit$7d$__ = __turbopack_import__("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.mjs [app-client] (ecmascript) {export default as IconEdit}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__IconTrash$7d$__ = __turbopack_import__("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTrash.mjs [app-client] (ecmascript) {export default as IconTrash}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
const columns = [
    {
        accessorKey: "trackID",
        header: "Track ID"
    },
    {
        accessorKey: "customerPhone",
        header: "Customer Phone",
        mantineTableHeadCellProps: {
            align: "center"
        },
        mantineTableBodyCellProps: {
            align: "center"
        }
    },
    {
        accessorKey: "orderID",
        header: "Order ID"
    },
    {
        accessorKey: "cityFrom",
        header: "City From"
    },
    {
        accessorKey: "cityTo",
        header: "City To"
    }
];
const AwaitingCollectionTable = ()=>{
    _s();
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mantine$2d$react$2d$table$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineReactTable"]({
        columns,
        data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Dashboard$292f$awaiting$2d$collection$2f$components$2f$AwaitingCollectionTable$2f$Data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Data"],
        //MRT display columns can still work, optionally override cell renders with `displayColumnDefOptions`
        enableFilterMatchHighlighting: true,
        enableGlobalFilter: true,
        enableGlobalFilterModes: true,
        enableGlobalFilterRankedResults: true,
        enableRowSelection: false,
        enableEditing: true,
        enableRowActions: true,
        initialState: {
            pagination: {
                pageSize: 5,
                pageIndex: 0
            },
            showGlobalFilter: true
        },
        //customize the MRT components
        mantinePaginationProps: {
            rowsPerPageOptions: [
                "5",
                "10",
                "15"
            ]
        },
        paginationDisplayMode: "pages",
        positionActionsColumn: "last",
        renderRowActions: ({ row, table })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                gap: "md",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        label: "Edit",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                            onClick: ()=>table.setEditingRow(row),
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__IconEdit$7d$__["IconEdit"], {}, void 0, false, {
                                fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        label: "Delete",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                            color: "red",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__IconTrash$7d$__["IconTrash"], {}, void 0, false, {
                                fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                lineNumber: 96,
                columnNumber: 7
            }, this)
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                pb: 50,
                order: 2,
                children: "Awaiting Collection"
            }, void 0, false, {
                fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                justify: "space-between",
                align: "center",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mantine$2d$react$2d$table$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MRT_GlobalFilterTextInput"], {
                    table: table
                }, void 0, false, {
                    fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"].ScrollContainer, {
                minWidth: 500,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    captionSide: "top",
                    fz: "md",
                    highlightOnHover: true,
                    horizontalSpacing: "xl",
                    striped: true,
                    verticalSpacing: "xs",
                    withTableBorder: true,
                    withColumnBorders: true,
                    m: "0",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"].Thead, {
                            children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"].Tr, {
                                    children: headerGroup.headers.map((header)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"].Th, {
                                            children: header.isPlaceholder ? null : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mantine$2d$react$2d$table$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flexRender"](header.column.columnDef.Header ?? header.column.columnDef.header, header.getContext())
                                        }, header.id, false, {
                                            fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this))
                                }, headerGroup.id, false, {
                                    fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"].Tbody, {
                            children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"].Tr, {
                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"].Td, {
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mantine$2d$react$2d$table$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MRT_TableBodyCellValue"], {
                                                cell: cell,
                                                table: table
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, this)
                                        }, cell.id, false, {
                                            fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this))
                                }, row.id, false, {
                                    fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mantine$2d$react$2d$table$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MRT_TablePagination"], {
                table: table
            }, void 0, false, {
                fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mantine$2d$react$2d$table$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MRT_ToolbarAlertBanner"], {
                stackAlertBanner: true,
                table: table
            }, void 0, false, {
                fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/(Dashboard)/awaiting-collection/components/AwaitingCollectionTable/AwaitingCollectionTable.tsx>",
        lineNumber: 115,
        columnNumber: 5
    }, this);
};
_s(AwaitingCollectionTable, "/WOSf2JBaxo+0qoFT4K1snMlBjM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mantine$2d$react$2d$table$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineReactTable"]
    ];
});
_c = AwaitingCollectionTable;
const __TURBOPACK__default__export__ = AwaitingCollectionTable;
var _c;
__turbopack_refresh__.register(_c, "AwaitingCollectionTable");

})()),
"[project]/src/app/(Dashboard)/awaiting-collection/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_app_(Dashboard)_awaiting-collection_42884f._.js.map