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

import asyncRequest from '../asyncRequests'
import { FETCH_ESS_PRICES } from '../../constants/actions'
import { getPricesUrl } from '../../lib/api/v1/urls'

export function fetchElasticSearchServicePrices({
  region,
  isMarketplace,
}: {
  region: string
  isMarketplace: boolean | null
}) {
  const url = getPricesUrl({ region, isMarketplace })

  return asyncRequest({
    type: FETCH_ESS_PRICES,
    method: `GET`,
    url,
  })
}
