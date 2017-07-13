import { filterContentByType } from '../src';
import {
  doc,
  docNested
} from './test-data';

describe('filterContentByType', () => {

  it('should return content filtered by type', () => {
    expect(
      filterContentByType(doc, 'paragraph', 'text')
    ).toMatchSnapshot();
  });

  it('should return empty array if nothing matches', () => {
    expect(
      filterContentByType(doc, 'panel')
    ).toMatchSnapshot();
  });

  it('should be able to extract text from nested document', () => {
    expect(
      filterContentByType(docNested, 'text')
    ).toMatchSnapshot();
  });

  it('should extract valid content only', () => {
    expect(
      filterContentByType(docNested, 'paragraph', 'blockquote', 'text')
    ).toMatchSnapshot();
  });

});
