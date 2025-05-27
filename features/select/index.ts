export { default as SelectCont } from './container/SelectCont';

/**
 * @Desc
 *
 * <SelectCont options={options} /> :  Uncontrolled (내부 상태로 선택값 관리)
 *
 * <SelectCont options={options} value="apple" onChange={setValue} /> : Controlled (외부 상태로 선택값 관리)
 *
 * - options: { label: string, value: string }[] (필수)
 * - value: string (선택)
 * - onChange: (value: string) => void (선택)
 * - className: string (선택)
 */
