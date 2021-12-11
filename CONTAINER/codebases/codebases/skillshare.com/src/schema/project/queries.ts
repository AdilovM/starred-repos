var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from 'apollo-boost';
export var GetProjectQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment ProjectComment on Comment {\n        id\n        key\n        contentHTML\n        createdAt\n        viewerCanEdit\n        likes\n        isEditing @client\n        isReplying @client\n        isShowingReplies @client\n        editedContentHTML @client\n        viewerHasLiked\n\n        author {\n            name\n            profileUrl\n            img\n            isTeacher\n            isTopTeacher\n            headline\n        }\n    }\n\n    query GetProject($projectKey: String!) {\n        projectByKey(key: $projectKey) {\n            id\n            key\n            title\n            contentHTML\n            coverImage {\n                sources {\n                    url\n                    width\n                    height\n                }\n            }\n            author {\n                id\n                username\n                firstName\n                lastName\n                mediumPictureUrl\n                headline\n                isTeacher\n                isTopTeacher\n                vanityUsername\n                viewer {\n                    isFollowing\n                }\n            }\n            viewer {\n                hasLiked\n                canEdit\n            }\n            likeCount\n            viewCount\n            class {\n                id\n                title\n                sku\n                url\n                smallCoverUrl\n                teacher {\n                    firstName\n                    lastName\n                    name\n                    vanityUsername\n                    username\n                }\n            }\n            comments {\n                ...ProjectComment\n\n                replies {\n                    ...ProjectComment\n\n                    isReply\n                    parent {\n                        key\n                    }\n                }\n            }\n        }\n    }\n"], ["\n    fragment ProjectComment on Comment {\n        id\n        key\n        contentHTML\n        createdAt\n        viewerCanEdit\n        likes\n        isEditing @client\n        isReplying @client\n        isShowingReplies @client\n        editedContentHTML @client\n        viewerHasLiked\n\n        author {\n            name\n            profileUrl\n            img\n            isTeacher\n            isTopTeacher\n            headline\n        }\n    }\n\n    query GetProject($projectKey: String!) {\n        projectByKey(key: $projectKey) {\n            id\n            key\n            title\n            contentHTML\n            coverImage {\n                sources {\n                    url\n                    width\n                    height\n                }\n            }\n            author {\n                id\n                username\n                firstName\n                lastName\n                mediumPictureUrl\n                headline\n                isTeacher\n                isTopTeacher\n                vanityUsername\n                viewer {\n                    isFollowing\n                }\n            }\n            viewer {\n                hasLiked\n                canEdit\n            }\n            likeCount\n            viewCount\n            class {\n                id\n                title\n                sku\n                url\n                smallCoverUrl\n                teacher {\n                    firstName\n                    lastName\n                    name\n                    vanityUsername\n                    username\n                }\n            }\n            comments {\n                ...ProjectComment\n\n                replies {\n                    ...ProjectComment\n\n                    isReply\n                    parent {\n                        key\n                    }\n                }\n            }\n        }\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=queries.js.map