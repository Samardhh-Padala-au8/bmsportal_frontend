import Modal from 'react-bootstrap/Modal';
import AvatarEditor from 'react-avatar-editor';
import { useEffect, useState } from 'react';
import { actionIds } from 'redux/types/actionsType';
import { useDispatch } from 'react-redux';

export function ImageCropper({
  show,
  handleClose,
  image,
  imgname,
  setimagefile,
  setImgname,
}) {
  let editor: any = '';
  const dispatch = useDispatch();
  const [zoomvalue, setZoomvalue] = useState(1);
  useEffect(() => {
    setZoomvalue(1);
  }, [show]);
  const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = window.atob(
      b64Data.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''),
    );
    const byteArrays: Array<Uint8Array> = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    const myFile = new File([blob], 'image.jpeg', {
      type: 'image/jpeg',
    });
    return myFile;
  };

  const handleInviteSend = () => {
    if (setEditorRef) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();
      const doc: any = b64toBlob(croppedImg, 'image/jpeg');
      const formData = new FormData();
      formData.append('type', 'cover');
      formData.append('cover', doc.originFileObj || doc);
      setImgname(imgname);
      setimagefile(doc.originFileObj || doc);
      handleClose();
      dispatch({
        type: actionIds.IMAGE_CONSTANT,
        payload: {
          image: formData,
        },
      });
    }
  };
  const setEditorRef = ed => {
    editor = ed;
  };
  const handleSlider = e => {
    let target = e.target;
    if (e.target.type !== 'range') {
      target = document.getElementById('range');
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
    setZoomvalue(e.target.value);
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Upload Cover Art</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ width: '100% !important' }}>
          <AvatarEditor
            ref={setEditorRef}
            image={image}
            borderRadius={8}
            border={60}
            color={[0, 0, 0, 0.5]}
            style={{ width: '100%', height: 'auto' }}
            scale={zoomvalue}
            rotate={0}
            backgroundColor="#0D0D0D"
          />
        </div>
        <div style={{ padding: '2.4rem 3.2rem' }}>
          <p className="text_poppin">Move the slider to zoom in or out.</p>
          <input
            type="range"
            min="1"
            max="10"
            id="range"
            value={zoomvalue}
            onChange={e => handleSlider(e)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="close_button" onClick={handleClose}>
          CANCEL
        </button>
        <button className="upload_button" onClick={handleInviteSend}>
          UPLOAD
        </button>
      </Modal.Footer>
    </Modal>
  );
}
