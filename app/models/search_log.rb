class SearchLog < ApplicationRecord
  validates :query, presence: true
  validates :ip_address, presence: true

  def self.most_searched_term
    SearchLog.group(:query).count.max_by { |_, count| count }&.first
  end

  def self.total_searches
    SearchLog.count
  end

  def self.average_searches_per_user
    SearchLog.total_searches / SearchLog.distinct.count(:ip_address) if SearchLog.first.present?
  end

  def self.average_searches_per_day
    SearchLog.all.count / SearchLog.all.map(&:created_at).map(&:to_date).uniq.count
  end

  def self.query_counts
    most_searched_q = SearchLog.all.group_by(&:query).sort_by { |_, logs| -logs.count }.take(5)
    query_counts = {}
    most_searched_q.each do |query, logs|
      query_counts[query] = logs.count
    end
    query_counts
  end

  def self.analytics
    {
      most_searched_term: most_searched_term,
      total_searches: total_searches,
      average_searches_per_user: average_searches_per_user,
      average_searches_per_day: average_searches_per_day,
      most_searched_queries: query_counts.keys,
      query_counts: query_counts
    }
  end
end