import CustomButton from './CustomButton'

const AiPicker = ({ prompt, setPrompt, generateImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
        value={prompt}
        rows={5}
      />

      <div className="flex flex-wrap gap-3">
        {generateImg ? (
          <CustomButton
            type={'outline'}
            title={'Ask AI'}
            customStyles={'text-xs'}
          />
        ) : (
          <>
            <CustomButton
              type={'outline'}
              title={'logo'}
              customStyles={'text-xs'}
              handleClick={() => handleSubmit('logo')}
            />

            <CustomButton
              type={'filled'}
              title={'Full'}
              customStyles={'text-xs'}
              handleClick={() => handleSubmit('full')}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AiPicker
