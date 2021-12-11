/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type LeadStatus = "ALL" | "ARCHIVED" | "%future added value";
export type LeadsLegacySortColumn = "ACTIVITIES" | "CREATED_AT" | "LABELS" | "OWNER" | "SOURCE" | "TITLE" | "%future added value";
export type LeadsLegacySortDirection = "ASC" | "DESC" | "%future added value";
export type SortDirection = "ASC" | "DESC" | "%future added value";
export type LeadsFilter = {
    filter?: string | null;
    labels?: Array<string> | null;
    owner?: string | null;
    sources?: Array<string> | null;
    useStoredFilters?: boolean | null;
};
export type LeadsLegacySort = {
    column: LeadsLegacySortColumn;
    direction: LeadsLegacySortDirection;
};
export type LeadsSort = {
    direction: SortDirection;
    id: string;
};
export type BulkUnarchiveButtonUnarchiveAllMutationVariables = {
    filter: LeadsFilter;
    status: LeadStatus;
    legacySort?: LeadsLegacySort | null;
    sort?: Array<LeadsSort> | null;
    excludeIds: Array<string>;
};
export type BulkUnarchiveButtonUnarchiveAllMutationResponse = {
    readonly unarchiveAllLeadsBulk: ({
        readonly __typename: "BulkSuccessResult";
        readonly changedRecordsCount: number | null;
        readonly " $fragmentRefs": FragmentRefs<"bulkUnarchived_tracking_data">;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null;
};
export type BulkUnarchiveButtonUnarchiveAllMutation = {
    readonly response: BulkUnarchiveButtonUnarchiveAllMutationResponse;
    readonly variables: BulkUnarchiveButtonUnarchiveAllMutationVariables;
};



/*
mutation BulkUnarchiveButtonUnarchiveAllMutation(
  $filter: LeadsFilter!
  $status: LeadStatus!
  $legacySort: LeadsLegacySort
  $sort: [LeadsSort!]
  $excludeIds: [ID!]!
) {
  unarchiveAllLeadsBulk(filter: $filter, status: $status, legacySort: $legacySort, sort: $sort, excludeIds: $excludeIds) {
    __typename
    ... on BulkSuccessResult {
      changedRecordsCount
      ...bulkUnarchived_tracking_data
    }
  }
}

fragment bulkUnarchived_tracking_data on BulkSuccessResult {
  changedRecordsCount
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "excludeIds"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "filter"
    } as any, v2 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "legacySort"
    } as any, v3 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "sort"
    } as any, v4 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "status"
    } as any, v5 = [
        {
            "kind": "Variable",
            "name": "excludeIds",
            "variableName": "excludeIds"
        } as any,
        {
            "kind": "Variable",
            "name": "filter",
            "variableName": "filter"
        } as any,
        {
            "kind": "Variable",
            "name": "legacySort",
            "variableName": "legacySort"
        } as any,
        {
            "kind": "Variable",
            "name": "sort",
            "variableName": "sort"
        } as any,
        {
            "kind": "Variable",
            "name": "status",
            "variableName": "status"
        } as any
    ], v6 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
    } as any, v7 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "changedRecordsCount",
        "storageKey": null
    } as any, v8 = [
        (v7 /*: any*/)
    ];
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/),
                (v2 /*: any*/),
                (v3 /*: any*/),
                (v4 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "BulkUnarchiveButtonUnarchiveAllMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v5 /*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "unarchiveAllLeadsBulk",
                    "plural": false,
                    "selections": [
                        (v6 /*: any*/),
                        {
                            "kind": "InlineFragment",
                            "selections": [
                                (v7 /*: any*/),
                                {
                                    "kind": "InlineDataFragmentSpread",
                                    "name": "bulkUnarchived_tracking_data",
                                    "selections": (v8 /*: any*/)
                                }
                            ],
                            "type": "BulkSuccessResult",
                            "abstractKey": null
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "RootMutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v1 /*: any*/),
                (v4 /*: any*/),
                (v2 /*: any*/),
                (v3 /*: any*/),
                (v0 /*: any*/)
            ],
            "kind": "Operation",
            "name": "BulkUnarchiveButtonUnarchiveAllMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v5 /*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "unarchiveAllLeadsBulk",
                    "plural": false,
                    "selections": [
                        (v6 /*: any*/),
                        {
                            "kind": "InlineFragment",
                            "selections": (v8 /*: any*/),
                            "type": "BulkSuccessResult",
                            "abstractKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "ed169e3957cb77b14d7d2af6ff53f62f",
            "id": null,
            "metadata": {},
            "name": "BulkUnarchiveButtonUnarchiveAllMutation",
            "operationKind": "mutation",
            "text": "mutation BulkUnarchiveButtonUnarchiveAllMutation(\n  $filter: LeadsFilter!\n  $status: LeadStatus!\n  $legacySort: LeadsLegacySort\n  $sort: [LeadsSort!]\n  $excludeIds: [ID!]!\n) {\n  unarchiveAllLeadsBulk(filter: $filter, status: $status, legacySort: $legacySort, sort: $sort, excludeIds: $excludeIds) {\n    __typename\n    ... on BulkSuccessResult {\n      changedRecordsCount\n      ...bulkUnarchived_tracking_data\n    }\n  }\n}\n\nfragment bulkUnarchived_tracking_data on BulkSuccessResult {\n  changedRecordsCount\n}\n"
        }
    } as any;
})();
(node as any).hash = 'e1aa09bf06bae292c634559b8abeaf73';
export default node;
