export const JobLabel = () => {
    <RadioGroup
        row
        aria-label="job"
        name="controlled-radio-buttons-group"
        defaultValue="noAnswer"
    // {selectValue === "noAnswer" ? "noAnswer" : selectValue}
    >
        <FormControlLabel
            value="student"
            control={<Radio />}
            label="学生"
            onChange={handleClick}
        />
        <FormControlLabel
            value="worker"
            control={<Radio />}
            label="社会人"
            onChange={handleClick}
        />
        <FormControlLabel
            value="noAnswer"
            control={<Radio />}
            label="回答しない"
            onChange={handleClick}
        />
    </RadioGroup>
}