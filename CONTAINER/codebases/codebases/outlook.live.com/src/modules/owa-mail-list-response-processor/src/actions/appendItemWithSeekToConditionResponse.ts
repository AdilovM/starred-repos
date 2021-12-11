import appendRowResponse from './appendRowResponse';
import { isItemSortKeyEqual } from './helpers/isSortKeyEqual';
import type TableView from 'owa-mail-list-store/lib/store/schema/TableView';
import { mailStore } from 'owa-mail-store';
import type { ItemRow } from 'owa-graph-schema';
import { TableQueryType } from 'owa-mail-list-store';

export default function appendItemWithSeekToConditionResponse(
    tableView: TableView,
    itemsToAppend: ItemRow[],
    itemsInView: number
) {
    // Server did not return anything
    if (!itemsToAppend || itemsToAppend.length == 0) {
        return;
    }

    // The first item would be the last item from the previous FindItem response.
    // We check if we have that item and do a sort key comparision
    const itemIdUsedForSeekConditionRequest = itemsToAppend[0].ItemId.Id;

    if (
        !mailStore.items.has(itemIdUsedForSeekConditionRequest) ||
        (tableView.tableQuery.type != TableQueryType.Search && // For find item search, we do not set the sortBy property in tableQuery
            !isItemSortKeyEqual(
                tableView.tableQuery,
                mailStore.items.get(itemIdUsedForSeekConditionRequest),
                itemsToAppend[0]
            ))
    ) {
        // Do not process the response if the last item which was used as an instance key
        // to get the next 'n' items has
        // 1) moved in place in the table
        // Because at this point the state on the server might have changed a lot e.g. new rows might have got
        // added after this item in question and we would end up appending the new rows after the existing rows if we
        // proceed and hence we discard.
        // 2) Or the row has been deleted on client in which case we do not have anythign to compare to.
        // In both above cases we would rely on the row notifications/ or user scrolling to get more items.
        return;
    }

    appendRowResponse(tableView, itemsToAppend, itemsInView, 'AppendOnLoadMore');
}
