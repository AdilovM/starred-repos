// ========================================================================
// This file is auto-generated by the `yarn naptime:types` script
// ========================================================================

import NaptimeResource from 'bundles/naptimejs/resources/NaptimeResource';

// ========================================================================
// Definitions for resource data types
// ========================================================================

export interface RenderableHtmlMetadata {
  hasMath: boolean;
  hasCodeBlock: boolean;
  isPlainText: boolean;
  hasAssetBlock: boolean;
}

export interface RenderableHtmlWithMetadata {
  renderableHtml: string;
  metadata: RenderableHtmlMetadata;
}

export interface CmlContent {
  dtdId: string;
  renderableHtmlWithMetadata?: RenderableHtmlWithMetadata | null;
  value: string;
}

export interface MyFeedbackV1 {
  id: string;
  userId: number;
  context: any;
  booleanResponses: Record<string, boolean>;
  comments: Record<string, CmlContent>;
  debugInfo?: any | null;
  rating: any;
  stringSetResponses: Record<string, Array<string>>;
  timestamp: any;
}

// ========================================================================
// Definitions for naptime-link
// ========================================================================

export interface MyFeedbackV1Connection {
  elements: Array<MyFeedbackV1> | null;
}

// ========================================================================
// Definitions for naptime-link queries
// ========================================================================

export interface MyFeedbackV1ByCourseAndFeedbackQuery {
  MyFeedbackV1: {
    byCourseAndFeedback: MyFeedbackV1Connection | null;
  } | null;
}

export interface MyFeedbackV1ByCourseAndFeedbackQueryVariables {
  courseIds: string;
  feedbackSystem: string;
  includes?: string | null;
}

export interface MyFeedbackV1CourseQuery {
  MyFeedbackV1: {
    course: MyFeedbackV1Connection | null;
  } | null;
}

export interface MyFeedbackV1CourseQueryVariables {
  courseIds: string;
  includes?: string | null;
}

export interface MyFeedbackV1ItemQuery {
  MyFeedbackV1: {
    item: MyFeedbackV1Connection | null;
  } | null;
}

export interface MyFeedbackV1ItemQueryVariables {
  courseId: string;
  itemId: string;
  includes?: string | null;
}

export interface MyFeedbackV1SubItemQuery {
  MyFeedbackV1: {
    subItem: MyFeedbackV1Connection | null;
  } | null;
}

export interface MyFeedbackV1SubItemQueryVariables {
  courseId: string;
  itemId: string;
  genericSubItemId: string;
  includes?: string | null;
}

// ========================================================================
// Definitions for naptime-link mutations
// ========================================================================

export interface MyFeedbackV1SubmitMutation {
  MyFeedbackV1: {
    submit: MyFeedbackV1Connection | null;
  } | null;
}

export interface MyFeedbackV1SubmitMutationVariables {
  courseId: string;
  itemId?: string | null;
  genericSubItemId?: string | null;
  feedbackSystem: string;
  includes?: string | null;
}

// ========================================================================
// Definitions for naptime-js
// ========================================================================

// Recursively applies Partial<T> to supported culling by the `fields` param.
type PartialConstruction<T> = {
  [TKey in keyof T]?: T[TKey] extends Array<infer TElement>
    ? Array<PartialConstruction<TElement>>
    : T[TKey] extends object
    ? PartialConstruction<T[TKey]>
    : T[TKey];
};

export class MyFeedbackV1NaptimeResource extends NaptimeResource {
  static RESOURCE_NAME = 'myFeedback.v1' as const;

  id!: string;

  userId!: number;

  context!: any;

  booleanResponses!: Record<string, boolean>;

  comments!: Record<string, CmlContent>;

  debugInfo?: any | null;

  rating!: any;

  stringSetResponses!: Record<string, Array<string>>;

  timestamp!: any;

  // Intentionally "useless" to supply params type
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(params: PartialConstruction<MyFeedbackV1>) {
    super(params);
  }
}
