/*
 * ELASTICSEARCH CONFIDENTIAL
 * __________________
 *
 *  Copyright Elasticsearch B.V. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Elasticsearch B.V. and its suppliers, if any.
 * The intellectual and technical concepts contained herein
 * are proprietary to Elasticsearch B.V. and its suppliers and
 * may be covered by U.S. and Foreign Patents, patents in
 * process, and are protected by trade secret or copyright
 * law.  Dissemination of this information or reproduction of
 * this material is strictly forbidden unless prior written
 * permission is obtained from Elasticsearch B.V.
 */

import { connect } from 'react-redux'

import DeleteDeployment from './DeleteDeployment'

import { deleteDeployment, fetchDeployment } from '../../../../../actions/stackDeployments'

import { deleteStackDeploymentRequest } from '../../../../../reducers'

import { AsyncRequestState, StackDeployment, ReduxState } from '../../../../../types'

type StateProps = {
  deleteStackDeploymentRequest: AsyncRequestState
}

type DispatchProps = {
  deleteDeployment: () => void
  fetchDeployment: () => void
}

type ConsumerProps = {
  deployment: StackDeployment
}

const mapStateToProps = (state: ReduxState, { deployment }: ConsumerProps): StateProps => ({
  deleteStackDeploymentRequest: deleteStackDeploymentRequest(state, deployment.id),
})

const mapDispatchToProps = (dispatch, { deployment }: ConsumerProps): DispatchProps => ({
  deleteDeployment: () => dispatch(deleteDeployment({ deploymentId: deployment.id })),
  fetchDeployment: () => dispatch(fetchDeployment({ deploymentId: deployment.id })),
})

export default connect<StateProps, DispatchProps, ConsumerProps>(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteDeployment)
