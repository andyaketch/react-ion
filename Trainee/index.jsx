import React from 'react';

function FeedbackForm() {
  const handleMouseEnter = () => {
    console.log('Reminder: Verify your feedback before submitting!');
  };

  const handleCopy = () => {
    alert('Text copied from feedback input!');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    alert('Feedback submitted!');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed while typing feedback.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="feedback">Your Feedback:</label>
      <input
        id="feedback"
        type="text"
        placeholder="Type your feedback here"
        onKeyDown={handleKeyDown}
        onCopy={handleCopy}
      />
      <button
        type="submit"
        onMouseEnter={handleMouseEnter}
      >
        Submit Feedback
      </button>
    </form>
  );
}

export default FeedbackForm;