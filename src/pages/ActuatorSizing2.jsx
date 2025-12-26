import React from "react";
import '../style/actuatorSizing.css'

// Helper Components
const EditableSelect = ({ options = [], listId, value, className = "editable-select" }) => (
  <>
    <input list={listId} value={value} className={className} />
    <datalist id={listId}>
      {options.map((opt, idx) => (
        <option key={idx} value={opt} />
      ))}
    </datalist>
  </>
);

const RadioGroup = ({ name, options, value }) => (
  <div className="radio-group">
    {options.map((option, i) => (
      <label key={i} className={`radio-label ${option.disabled ? "disabled" : ""}`}>
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={value === option.value}
          disabled={option.disabled}
        />
        {option.label}
      </label>
    ))}
  </div>
);

const InputField = ({
  label,
  unit,
  value,
  className = "input-field",
  type = "text",
  disabled = false,
}) => (
  <div className="input-container">
    <label className="input-label">{label}:</label>
    <input type={type} className={className} value={value} disabled={disabled} />
    {unit && <span className="input-unit">{unit}</span>}
  </div>
);

// Main Component
export default function ActuatorSizing() {
  const valveTypeOptions = ["Ball", "Butterfly", "Gate"];
  const actuatorSeries = [
    "S98 - Pneumatic Scotch Yoke Actuator",
    "S100 - Series",
    "S200 - Series"
  ];
  const supplyPressureOptions = ["3.0", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0", "7.0", "8.0", "10.0"];
  
  const torqueLabels = [
    "Break to Open",
    "Run to Open",
    "End to Open",
    "Break to Close",
    "Run to Close",
    "End to Close",
  ];

  const actuatorTorquesLabels = [
    "Pneumatic Start",
    "Pneumatic Min",
    "Pneumatic End",
    "Spring Start",
    "Spring Min",
    "Spring End",
  ];

  return (
    <div className="actuator-sizing-container">
      {/* Top Section */}
      <div className="top-section">
        {/* Valve Information */}
        <div className="valve-info-section">
          <div className="section-header">
            <p className="section-title">Actuator Sizing Units</p>
            <button className="clear-button">Clear All</button>
          </div>

          <div className="valve-info-content">
            {/* Valve Type */}
            <div className="valve-type-row">
              <span className="label">Valve Type:</span>
              <select className="valve-type-select" value="">
                <option value="">Select Valve Type</option>
                {valveTypeOptions.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Safety Factor */}
            <div className="safety-factor-row">
              <span className="label">Required Safety Factor:</span>
              <input type="text" className="safety-factor-input" value="1.25" />
            </div>

            {/* Stem Diameter */}
            <div className="stem-diameter-section">
              <span className="stem-diameter-title">Stem Diameter:</span>
              <div className="stem-diameter-row">
                <div className="stem-unit-options">
                  {["Inch", "Metric"].map((unit) => (
                    <label key={unit} className="stem-unit-label">
                      <input
                        type="radio"
                        name="stemUnit"
                        value={unit}
                        defaultChecked={unit === "Metric"}
                      />
                      <span className="stem-unit-text">{unit}</span>
                    </label>
                  ))}
                </div>
                <input type="text" className="stem-diameter-input" value="" />
              </div>
            </div>
          </div>
        </div>

        {/* Torque Section */}
        <div className="torque-section">
          <div className="torque-grid">
            <div className="torque-column">
              <div className="torque-header">
                <label className="torque-label">Value Torques</label>
                <select className="valve-count-select" value="6 Values">
                  <option value="6 Values">6 Values</option>
                  <option value="3 Values">3 Values</option>
                </select>
              </div>
              {torqueLabels.map((label, i) => (
                <InputField key={i} label={label} unit="Nm" value="" />
              ))}
            </div>

            <div className="torque-column">
              <div className="torque-column-title">Actuator Torques</div>
              {actuatorTorquesLabels.map((label, i) => (
                <InputField key={i} label={label} unit="Nm" value="" disabled />
              ))}
            </div>

            <div className="torque-column">
              <div className="torque-column-title">Actual S.F</div>
              {torqueLabels.map((_, i) => (
                <div key={i} className="sf-input-container">
                  <input type="text" className="sf-input" value="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        {/* Actuator Image Placeholder */}
        <div className="image-placeholder-section">
          <div className="image-placeholder-content">
            <div className="placeholder-image">
              <span className="placeholder-text">Actuator Image</span>
            </div>
            <p className="placeholder-description">Image placeholder</p>
          </div>
        </div>

        {/* Actuator Selector */}
        <div className="actuator-selector-section">
          <div className="actuator-selector-grid">
            {/* Actuator Series */}
            <div className="actuator-series-column">
              <label className="actuator-series-label">Actuator Series:</label>
              <div className="actuator-series-options">
                {actuatorSeries.map((series, i) => (
                  <label key={i} className="series-option">
                    <input
                      type="radio"
                      name="series"
                      defaultChecked={series.includes("S98")}
                      disabled={!series.includes("S98")}
                    />
                    <span
                      className={
                        series.includes("S98")
                          ? "series-enabled"
                          : "series-disabled"
                      }
                    >
                      {series}
                    </span>
                  </label>
                ))}
              </div>

              {/* Supply Pressure */}
              <div className="supply-pressure-section">
                <label className="supply-pressure-label">Supply Pressure:</label>
                <div className="supply-pressure-row">
                  <select className="supply-pressure-select" value="">
                    <option value="">SELECT</option>
                    {supplyPressureOptions.map((pressure, idx) => (
                      <option key={idx} value={pressure}>
                        {pressure}
                      </option>
                    ))}
                  </select>
                  <span>bar</span>
                </div>
              </div>
            </div>

            {/* Actuator Type & Settings */}
            <div className="actuator-type-column">
              <label className="actuator-type-label">Actuator Type:</label>
              <RadioGroup
                name="actuatorType"
                options={[
                  { label: "Spring Return", value: "Spring Return" },
                  { label: "Double Acting", value: "Double Acting", disabled: true },
                ]}
                value="Spring Return"
              />

              {/* Yoke Type */}
              <div className="yoke-type-section">
                <div className="yoke-type-title">Yoke Type:</div>
                <div className="yoke-type-options">
                  {["Preferred", "Symmetric", "Canted"].map((type) => (
                    <label key={type} className="yoke-type-option">
                      <input
                        type="radio"
                        name="yokeType"
                        value={type}
                        defaultChecked={type === "Symmetric"}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* PED Option */}
              <div className="ped-option-section">
                <span className="ped-option-title">PED Option:</span>
                <div className="ped-option-options">
                  {["Non PED", "PED"].map((option) => (
                    <label key={option} className="ped-option-option">
                      <input
                        type="radio"
                        name="ped"
                        value={option}
                        defaultChecked={option === "Non PED"}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Fail Safe */}
            <div className="fail-safe-column">
              <label className="fail-safe-label">Fail Safe Condition</label>
              <RadioGroup
                name="failSafe"
                options={[
                  {
                    label: "Fail Close (Fail Clockwise - FCW)",
                    value: "Fail Close (Fail Clockwise - FCW)",
                  },
                  {
                    label: "Fail Open (Fail Counter Clockwise - FCCW)",
                    value: "Fail Open (Fail Counter Clockwise - FCCW)",
                    disabled: true,
                  },
                ]}
                value="Fail Close (Fail Clockwise - FCW)"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons-section">
            <div className="action-buttons">
              <button className="select-actuator-button">Select Actuator</button>
              <button className="configuration-button">Actuator Configuration</button>
            </div>

            <div className="actuator-selected-section1">
              <span className="actuator-selected-label">Actuator Selected</span>
              <div className="actuator-selected-section">
                <input
                  type="text"
                  className="actuator-selected-input"
                  placeholder="Actuator Model"
                  value=""
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}