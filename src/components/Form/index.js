import React from 'react';

export default function Form({
  selectedPostId,
  handleFormSubmit,
  handleTitleChange,
  handleFormReset,
  handleDescriptionChange,
  updateRef,
  titleValue,
  descriptionValue
}) {
  return (
    <>
      <p>{selectedPostId ? 'Update the post' : 'Add a post'}</p>
      <div className="form-container">
        <form onSubmit={e => handleFormSubmit(e)}>
          <input
            ref={updateRef}
            value={titleValue}
            onChange={e => handleTitleChange(e)}
            placeholder="Title"
            type="text"
            name="tile"
          />
          <br />
          <textarea
            value={descriptionValue}
            onChange={e => handleDescriptionChange(e)}
            placeholder="Your blog post goes here"
            name="description"></textarea>
          <br />
          <button className="add-btn" type="submit">
            Add Post
          </button>
        </form>
        {selectedPostId ? (
          <button className="cancel-btn" onClick={handleFormReset}>
            Cancel Update
          </button>
        ) : null}
      </div>
    </>
  );
}
