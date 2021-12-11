/**
 * Encapsulates different variations iof item feedback UI and interfaces
 * with flux actions.
 */
import type { Item } from 'bundles/learner-progress/types/Item';

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import {
  getItemFeedback,
  likeItem,
  cancelLikeItem,
  dislikeItem,
  cancelDislikeItem,
  flagItem,
} from 'bundles/content-feedback/actions/ItemFeedbackActions';

import CMLUtils from 'bundles/cml/utils/CMLUtils';

import connectToStores from 'vendor/cnpm/fluxible.v0-4/addons/connectToStores';

import isFeedbackRedesignEnabled from 'bundles/content-feedback/utils/isFeedbackRedesignEnabled';

import Flag from 'bundles/content-feedback/components/flag/Flag';
import Dislike from 'bundles/content-feedback/components/like/Dislike';
import Like from 'bundles/content-feedback/components/like/Like';
import type LikeFeedback from 'bundles/content-feedback/models/LikeFeedback';
import type FlagFeedback from 'bundles/content-feedback/models/FlagFeedback';
import type { ItemType } from 'bundles/content-feedback/constants/ItemTypes';

import DislikeV2 from 'bundles/content-feedback/components/like/DislikeV2';
import LikeV2 from 'bundles/content-feedback/components/like/LikeV2';

import type CourseStoreClass from 'bundles/ondemand/stores/CourseStore';
import type ItemFeedbackStoreClass from 'bundles/content-feedback/stores/ItemFeedbackStore';

import type { CmlContent } from 'bundles/cml/types/Content';

type PropsFromCaller = {
  courseId: string;
  computedItem: Item;
  itemFeedbackType: ItemType;
  tooltipPlacement: string; // TODO tighten
  subItemId?: string;
};

type PropsFromStores = {
  likeFeedback: LikeFeedback;
  dislikeFeedback: LikeFeedback;
  flagFeedback: FlagFeedback;
  feedbackItemId: string;
};

type Stores = {
  CourseStore: CourseStoreClass;
  // @ts-expect-error ts-migrate(2749) FIXME: 'ItemFeedbackStoreClass' refers to a value, but is... Remove this comment to see the full error message
  ItemFeedbackStore: ItemFeedbackStoreClass;
};

type PropsToComponent = PropsFromCaller & PropsFromStores;

class ItemFeedbackContent extends React.Component<PropsToComponent> {
  static contextTypes = {
    executeAction: PropTypes.func,
    track: PropTypes.func,
  };

  componentDidMount() {
    const { courseId, computedItem, subItemId } = this.props;
    const { executeAction } = this.context;
    const { id: itemId } = computedItem;
    executeAction(getItemFeedback, {
      courseId,
      itemId,
      subItemId,
    });
  }

  handleLike = (comment: CmlContent) => {
    const { courseId, computedItem, subItemId } = this.props;
    const { executeAction, track } = this.context;
    const { id: itemId } = computedItem;

    executeAction(likeItem, {
      courseId,
      itemId,
      comment,
      subItemId,
    });
    track('click.like');
  };

  handleLikeComment = (comment: CmlContent) => {
    const { courseId, computedItem, subItemId } = this.props;
    const { executeAction, track } = this.context;
    const { id: itemId } = computedItem;

    executeAction(likeItem, {
      courseId,
      itemId,
      comment,
      subItemId,
    });
    track('click.send_like_comment', {
      // eslint-disable-next-line camelcase
      feedback_length: CMLUtils.getLength(comment),
    });
  };

  handleLikeCancel = () => {
    const { courseId, computedItem, subItemId, likeFeedback } = this.props;
    const { executeAction, track } = this.context;
    const { id: itemId } = computedItem;
    const { comment } = likeFeedback;

    executeAction(cancelLikeItem, {
      courseId,
      itemId,
      comment,
      subItemId,
    });
    track('click.cancel_like');
  };

  handleDislike = (comment: CmlContent) => {
    const { courseId, computedItem, subItemId } = this.props;
    const { executeAction, track } = this.context;
    const { id: itemId } = computedItem;

    executeAction(dislikeItem, {
      courseId,
      itemId,
      comment,
      subItemId,
    });
    track('click.dislike');
  };

  handleDislikeComment = (comment: CmlContent) => {
    const { courseId, computedItem, subItemId } = this.props;
    const { executeAction, track } = this.context;
    const { id: itemId } = computedItem;

    executeAction(dislikeItem, {
      courseId,
      itemId,
      comment,
      subItemId,
    });
    track('click.send_dislike_comment', {
      // eslint-disable-next-line camelcase
      feedback_length: CMLUtils.getLength(comment),
    });
  };

  handleDislikeCancel = () => {
    const { courseId, computedItem, subItemId, dislikeFeedback } = this.props;
    const { executeAction, track } = this.context;
    const { id: itemId } = computedItem;
    const { comment } = dislikeFeedback;

    executeAction(cancelDislikeItem, {
      courseId,
      itemId,
      comment,
      subItemId,
    });
    track('click.cancel_dislike');
  };

  handleFlag = () => {
    const { track } = this.context;
    track('click.flag');
  };

  handleFlagSubmit = (comments: $TSFixMe) => {
    this.submitFlag(comments, 'click.send_flag_comments');
  };

  handleFlagRemove = (comments: $TSFixMe) => {
    this.submitFlag(comments, 'click.remove_flag_comment');
  };

  submitFlag(comments: $TSFixMe, eventKey: $TSFixMe) {
    const { courseId, computedItem, subItemId } = this.props;
    const { executeAction, track } = this.context;
    const { id: itemId } = computedItem;
    const categories = {};
    const active = !_(comments).isEmpty();

    executeAction(flagItem, {
      courseId,
      itemId,
      comments,
      subItemId,
      active,
    });

    _(comments).each((comment, type) => {
      if (comment) {
        // @ts-ignore ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        categories[type] = CMLUtils.getLength(comment);
      }
    });

    track(eventKey, {
      // eslint-disable-next-line camelcase
      flag_categories: categories,
    });
  }

  render() {
    const {
      computedItem,
      itemFeedbackType,
      feedbackItemId,
      tooltipPlacement,
      flagFeedback,
      likeFeedback,
      dislikeFeedback,
      courseId,
    } = this.props;

    if (computedItem.id !== feedbackItemId) {
      return null;
    }

    const showLikeV2 = isFeedbackRedesignEnabled(courseId);

    return (
      <div className="rc-ItemFeedbackContent horizontal-box">
        {showLikeV2
          ? [
              <LikeV2
                key="LikeV2"
                withFeedback={true}
                comment={likeFeedback.comment}
                selected={likeFeedback.isSelected}
                tooltipPlacement={tooltipPlacement}
                onSelect={this.handleLike}
                onDeselect={this.handleLikeCancel}
                onComment={this.handleLikeComment}
                itemFeedbackType={itemFeedbackType}
              />,
              <DislikeV2
                key="DislikeV2"
                withFeedback={true}
                comment={dislikeFeedback.comment}
                selected={dislikeFeedback.isSelected}
                tooltipPlacement={tooltipPlacement}
                onSelect={this.handleDislike}
                onDeselect={this.handleDislikeCancel}
                onComment={this.handleDislikeComment}
                itemFeedbackType={itemFeedbackType}
              />,
            ]
          : [
              <Like
                key="Like"
                withFeedback={false}
                comment={likeFeedback.comment}
                selected={likeFeedback.isSelected}
                tooltipPlacement={tooltipPlacement}
                onSelect={this.handleLike}
                onDeselect={this.handleLikeCancel}
                onComment={this.handleLikeComment}
                itemFeedbackType={itemFeedbackType}
              />,
              <Dislike
                key="Dislike"
                withFeedback={false}
                comment={dislikeFeedback.comment}
                selected={dislikeFeedback.isSelected}
                tooltipPlacement={tooltipPlacement}
                onSelect={this.handleDislike}
                onDeselect={this.handleDislikeCancel}
                onComment={this.handleDislikeComment}
                itemFeedbackType={itemFeedbackType}
              />,
            ]}
        <Flag
          computedItem={computedItem}
          itemFeedbackType={itemFeedbackType}
          selected={flagFeedback.isActive}
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'comments' does not exist on type 'FlagFe... Remove this comment to see the full error message
          comments={flagFeedback.comments}
          tooltipPlacement={tooltipPlacement}
          onSelect={this.handleFlag}
          onSubmit={this.handleFlagSubmit}
          onRemove={this.handleFlagRemove}
        />
      </div>
    );
  }
}

export default connectToStores<PropsToComponent, PropsFromCaller, Stores>(
  ['CourseStore', 'ItemFeedbackStore'],
  ({ CourseStore, ItemFeedbackStore }: Stores) => ({
    courseId: CourseStore.getCourseId(),
    likeFeedback: ItemFeedbackStore.getLikeFeedback(),
    dislikeFeedback: ItemFeedbackStore.getDislikeFeedback(),
    flagFeedback: ItemFeedbackStore.getFlagFeedback(),
    feedbackItemId: ItemFeedbackStore.getItemId(),
  })
)(ItemFeedbackContent);
