import React, { useState, useRef, RefObject } from "react";
import DragAndDropWrapperType from "../../../types/Form/FormInputs/FileInput/DragAndDropWrapper";
import FontAwesome from "react-fontawesome";
import classNames from "classnames/bind";
import styles from "./DragAndDropWrapper.module.scss";

const cx = classNames.bind(styles);

const useDragAndDrop = (
  onChange: (files: FileList | File[] | undefined | null) => void,
  disabled: boolean,
  multiple: boolean,
  ref: RefObject<HTMLElement>
) => {
  const [dragState, setDragState] = useState("");

  const onDragEnter = (event: React.DragEvent) => {
    if (dragState !== "enter") {
      setDragState("enter");
    }

    event.preventDefault();
    event.stopPropagation();
  };

  const onDragOver = (event: React.DragEvent) => {
    if (dragState !== "enter") {
      setDragState("enter");
    }

    event.preventDefault();
    event.stopPropagation();
  };

  const onDragLeave = (event: React.DragEvent) => {
    if (dragState !== "" && ref?.current?.isEqualNode(event.target as Node)) {
      setDragState("");
    }

    event.preventDefault();
    event.stopPropagation();
  };

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setDragState("");
    if (!disabled) {
      let files: FileList | File[] = event.dataTransfer.files;

      if (!multiple && files.length > 1) {
        files = Array.from(files).slice(0, 1);
      }
      onChange(files);
    }
  };

  const dragClassName =
    dragState === "enter" && !disabled ? "draggingOver" : "";

  return { onDragEnter, onDragOver, onDragLeave, onDrop, dragClassName };
};

const uploadIcon = (
  <div className="fa-stack">
    <FontAwesome name="circle" stack="2x" />

    <FontAwesome name="cloud-upload" className={cx("overlayIcon")} stack="1x" />
  </div>
);

export const dragOverlayText = (
  <div className={cx("overlay")}>
    <div className={cx("overlayText")}>{uploadIcon} Drop files to upload</div>
  </div>
);

const DragAndDropWrapper: React.FC<DragAndDropWrapperType> = ({
  onChange,
  isDisabled,
  multiple,
  render,
  ...props
}) => {
  const wrapperRef = useRef(null);

  const { dragClassName, ...dragProps } = useDragAndDrop(
    onChange,
    isDisabled,
    multiple,
    wrapperRef
  );

  return render({
    ...props,
    onChange,
    isDisabled,
    wrapperRef,
    dragClassName,
    ...dragProps,
  });
};

export default DragAndDropWrapper;
