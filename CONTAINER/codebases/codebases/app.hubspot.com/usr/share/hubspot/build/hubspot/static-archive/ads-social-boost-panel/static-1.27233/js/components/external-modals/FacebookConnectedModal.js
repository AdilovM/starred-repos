'use es6';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import PropTypes from 'prop-types';
import UIModal from 'UIComponents/dialog/UIModal';
import UIDialogHeaderImage from 'UIComponents/dialog/UIDialogHeaderImage';
import UIIllustration from 'UIComponents/image/UIIllustration';
import UIDialogHeader from 'UIComponents/dialog/UIDialogHeader';
import UIDialogCloseButton from 'UIComponents/dialog/UIDialogCloseButton';
import UIDialogBody from 'UIComponents/dialog/UIDialogBody';
import UIDialogFooter from 'UIComponents/dialog/UIDialogFooter';
import UIButton from 'UIComponents/button/UIButton';
import FormattedHTMLMessage from 'I18n/components/FormattedHTMLMessage';
import FormattedMessage from 'I18n/components/FormattedMessage';
import H2 from 'UIComponents/elements/headings/H2';

var FacebookConnectedModal = function FacebookConnectedModal(_ref) {
  var onDismiss = _ref.onDismiss;
  return /*#__PURE__*/_jsxs(UIModal, {
    use: "info",
    width: 500,
    "data-test-id": "social-discoverability-modal",
    children: [/*#__PURE__*/_jsx(UIDialogHeaderImage, {
      offsetBottom: -23,
      offsetTop: 56,
      children: /*#__PURE__*/_jsx(UIIllustration, {
        name: "announcement",
        width: 150
      })
    }), /*#__PURE__*/_jsxs(UIDialogHeader, {
      children: [/*#__PURE__*/_jsx(UIDialogCloseButton, {
        onClick: onDismiss
      }), /*#__PURE__*/_jsx(H2, {
        children: /*#__PURE__*/_jsx(FormattedMessage, {
          message: "ADS_SOCIAL_POST_BOOST.modal.header"
        })
      })]
    }), /*#__PURE__*/_jsx(UIDialogBody, {
      children: /*#__PURE__*/_jsx(FormattedHTMLMessage, {
        message: "ADS_SOCIAL_POST_BOOST.modal.facebookConnected"
      })
    }), /*#__PURE__*/_jsx(UIDialogFooter, {
      align: "center",
      children: /*#__PURE__*/_jsx(UIButton, {
        use: "primary",
        onClick: onDismiss,
        children: /*#__PURE__*/_jsx(FormattedMessage, {
          message: "ADS_SOCIAL_POST_BOOST.modal.okGotIt"
        })
      })
    })]
  });
};

FacebookConnectedModal.propTypes = {
  onDismiss: PropTypes.func.isRequired
};
export default FacebookConnectedModal;