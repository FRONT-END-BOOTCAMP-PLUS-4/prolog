export { default as SelectCont } from './container/SelectCont';

/**
 * @Desc
 *
 *  Uncontrolled 모드 (내부 상태로 선택값 관리)
 *  <SelectCont options={options} />
 *
 *  Controlled 모드 (외부 상태로 선택값 관리)
 *  <SelectCont options={options} value={value} onChange={setValue} />
 *
 *  localStorage 연동 모드 (내부 상태를 localStorage에 저장)
 *  <SelectCont options={options} storageKey="my-select" />
 *
 * - options: { label: string, value: string }[] (필수)
 * - value: string (선택)
 * - onChange: (value: string) => void (선택)
 * - className: string (선택)
 */
