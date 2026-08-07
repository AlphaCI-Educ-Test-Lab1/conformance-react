import { SERVICE_NAME } from './index';

describe('conformance-react', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('conformance-react');
  });
});
