// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type ForwardCalendarEventRequest from '../contract/ForwardCalendarEventRequest';

export default function forwardCalendarEventRequest(
    data: ForwardCalendarEventRequest
): ForwardCalendarEventRequest {
    let result: ForwardCalendarEventRequest = {
        __type: 'ForwardCalendarEventRequest:#Exchange',
        ...data,
    };

    return result;
}
