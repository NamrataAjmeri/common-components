import React, { useRef, useState } from "react";
import classNames from "classnames/bind";
import { Popover, ArrowContainer } from "react-tiny-popover";
import styles from "./Tooltip.module.scss";
import FontAwesome from "react-fontawesome";
import TooltipType, { triggerType } from "../types/Tooltip";
import colors from "../constants/index";

const cx = classNames.bind(styles);
const Tooltip = ({
  show = false,
  position = ["top"],
  shouldShowCloseButton,
  title,
  content,
  width = 350,
  isWhiteTheme = false,
  trigger = "hover",
  children,
}: TooltipType) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(show);
  const clickMeButtonRef = useRef(null);

  const togglePopover = (togglePopover: boolean, trigger: triggerType) => {
    if (`${trigger}` == "hover") {
      setIsPopoverOpen(togglePopover);
    }
  };

  const displayTooltipOnClick = (
    togglePopover: boolean,
    trigger: triggerType
  ) => {
    if (`${trigger}` == "click") {
      setIsPopoverOpen(togglePopover);
    }
  };

  const customStyle = isWhiteTheme
    ? {
        backgroundColor: colors.background.white,
        color: colors.text["800"],
        width: `${width}` + "px",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
      }
    : {
        backgroundColor: colors.surface.light,
        color: colors.background.white,
        width: `${width}` + "px",
      };

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={position}
      align="end"
      padding={10}
      reposition={false}
      onClickOutside={() => setIsPopoverOpen(false)}
      ref={clickMeButtonRef} // if you'd like a ref to your popover's child, you can grab one here
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={colors.surface.light}
          arrowSize={8}
          arrowStyle={{ boxShadow: "none" }}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div style={customStyle} className={cx("tooltip")} role="tooltip">
            <div className={cx("titleContainer")}>
              <div
                style={
                  isWhiteTheme
                    ? { color: colors.primary["600"] }
                    : { color: colors.background.white }
                }
                className={cx("title")}
                role="title"
              >
                {title}
              </div>
              {shouldShowCloseButton && (
                <div>
                  <button
                    aria-label="close"
                    style={
                      isWhiteTheme
                        ? { color: colors.primary["600"] }
                        : { color: colors.background.white }
                    }
                    className={cx("closeButton")}
                    onClick={() => setIsPopoverOpen(false)}
                  >
                    <FontAwesome name="fal fa-times" />
                  </button>
                </div>
              )}
            </div>
            <div role="content">{content}</div>
          </div>
        </ArrowContainer>
      )}
    >
      <div
        onMouseOver={() => togglePopover(true, trigger)}
        onMouseLeave={() => togglePopover(false, trigger)}
        onClick={() => displayTooltipOnClick(true, trigger)}
        className={cx("container")}
        role="target"
      >
        {children}
      </div>
    </Popover>
  );
};

export default Tooltip;
