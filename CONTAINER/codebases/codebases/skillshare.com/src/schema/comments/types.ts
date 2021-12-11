var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from 'apollo-boost';
export var CommentTypes = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    input UpdateCommentStateInput {\n        id: String\n        isEditing: Boolean\n        isReplying: Boolean\n        isShowingReplies: Boolean\n        contentHTML: String\n        editedContentHTML: String\n        viewerHasLiked: Boolean\n        likes: Int\n    }\n\n    type UpdateCommentStatePayload {\n        comment: Comment\n    }\n\n    extend type Comment {\n        isEditing: Boolean!\n        isReplying: Boolean!\n        isShowingReplies: Boolean!\n        editedContentHTML: String!\n    }\n\n    extend type Mutation {\n        updateCommentState(input: UpdateCommentStateInput!): UpdateCommentStatePayload\n    }\n"], ["\n    input UpdateCommentStateInput {\n        id: String\n        isEditing: Boolean\n        isReplying: Boolean\n        isShowingReplies: Boolean\n        contentHTML: String\n        editedContentHTML: String\n        viewerHasLiked: Boolean\n        likes: Int\n    }\n\n    type UpdateCommentStatePayload {\n        comment: Comment\n    }\n\n    extend type Comment {\n        isEditing: Boolean!\n        isReplying: Boolean!\n        isShowingReplies: Boolean!\n        editedContentHTML: String!\n    }\n\n    extend type Mutation {\n        updateCommentState(input: UpdateCommentStateInput!): UpdateCommentStatePayload\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=types.js.map